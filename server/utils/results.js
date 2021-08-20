class Results {
  constructor() {
    this._results = [];
  }

  _sortResults(results) {
    return results.sort((a, b) => {
      const aValue = a.yes - a.no;
      const bValue = b.yes - b.no;
      if (aValue > bValue) return -1;
      if (aValue < bValue) return 1;
      if (aValue === bValue) return 0;
    });
  }

  insert(data) {
    // deconstruct data
    const { room, answers, details } = data;
    // see if the current room exists
    const item = this._results.find((r) => r.room === room);
    if (item) item.answers.push(answers);
    if (!item) this._results.push({ details, room, answers: [answers] });
  }

  getAll(room) {
    const item = this._results.find((r) => r.room === room);
    return {
      item,
      length: item.answers.length,
    };
  }

  total(room) {
    const item = this._results.find((r) => r.room === room);
    // creates [{yes: 0, no: 0}] for the number of businesses
    let totals = [];
    // create objects to add scores to
    for (let i = 0; i < item.details.length; i++) {
      totals.push({ name: item.details[i].name, yes: 0, no: 0 });
    }
    // filter over every members answers and total them up
    item.answers.forEach((a) => {
      a.forEach((b, i) => {
        if (b) totals[i].yes++;
        if (!b) totals[i].no++;
      });
    });
    // delete room information and answers
    this._results = this._results.filter((r) => r.room !== room);
    return this._sortResults(totals);
  }
}

export const results = new Results();
