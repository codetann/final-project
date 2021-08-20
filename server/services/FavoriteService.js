import Service from "./Service";

class FavoriteService extends Service {
  constructor(model) {
    super(model);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.all = this.all.bind(this);
  }

  async add(user, business) {
    try {
      business.user_id = user;
      // add new favorite to database
      await this.insert(business);
      // fetch updated list of favorites
      const favorites = await this.getAll({ user_id: user });
      // return favorites
      return {
        error: false,
        statusCode: 200,
        data: favorites,
      };
    } catch (error) {
      console.log(error);
      // return error details
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Could not add favorite",
      };
    }
  }

  async remove(user, business) {
    try {
      // remove favorite from database
      await this.delete({ user_id: user.id, yelp_id: business.yelp_id });
      // fetch updated list of favorites
      const favorites = await this.getAll({ user_id: user.id });
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

  async all(id) {
    try {
      // fetch updated list of favorites
      const favorites = await this.getAll({ user_id: id });
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
