class Service {
  constructor(model) {
    this.model = model;
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.updateDetails = this.updateDetails.bind(this);
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
    this.delete = this.delete.bind(this);
    this.deleteAll = this.deleteAll.bind(this);
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

  async updateDetails(selectors, data) {
    const user = await this.model.findOne({ where: { ...selectors } });

    user.name = data?.name || user.name;
    user.email = data?.email || user.email;
    user.photo = data?.photo || user.photo;

    await user.save();
    return user;
  }

  async get(selectors) {
    const item = await this.model.findOne({ where: { ...selectors } });
    return item.dataValues;
  }

  async getAll(selectors) {
    const items = await this.model.findAll({ where: { ...selectors } });
    return items;
  }

  async delete(selectors) {
    const item = await this.model.findOne({ where: { ...selectors } });
    await item.destroy();
  }

  async deleteAll(selectors) {
    await this.model.destroy({ where: { ...selectors } });
  }
}

export default Service;
