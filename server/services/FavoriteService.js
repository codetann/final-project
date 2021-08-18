import Service from "./Service";

class FavoriteService extends Service {
  constructor(model) {
    super(model);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  async add(data) {
    try {
      // add new favorite to database
      await this.insert(data);
      // fetch updated list of favorites
      const favorites = await this.getAll({ user_id: data.user_id });
      // return favorites
      return {
        error: false,
        statusCode: 200,
        data: favorites,
      };
    } catch (error) {
      // return error details
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Could not add favorite",
      };
    }
  }

  async remove(selectors) {
    try {
      // remove favorite from database
      await this.delete(selectors);
      // fetch updated list of favorites
      const favorites = await this.getAll({ user_id: selectors.id });
      // return success details
      return {
        error: false,
        statusCode: 200,
        data: favorites,
      };
    } catch (error) {
      // return error details
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Could not remove favorites",
      };
    }
  }

  async fetch(selectors) {
    try {
      // fetch updated list of favorites
      const favorites = await this.getAll({ user_id: selectors.id });
      // return success details
      return {
        error: false,
        statusCode: 200,
        data: favorites,
      };
    } catch (error) {
      // return error details
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Error while fetching favorites",
      };
    }
  }
}

export default FavoriteService;
