class Service {
  constructor(model) {
    this.model = model;
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  async insert(data) {
    const item = await this.model.create(data);
    return item;
  }

  async update(selectors, data) {
    const item = await this.model.update(
      { ...data },
      { where: { ...selectors } }
    );
    return item;
  }

  async get(selectors) {
    const item = await this.model.findOne({ where: { ...selectors } });
    return item.dataValues;
  }

  async getAll(selectors) {
    const items = await this.model.findAll({ where: { ...selectors } });
    return items;
  }
}

export default Service;
