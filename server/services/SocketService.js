import Service from "./Service";

class SocketService extends Service {
  constructor(model) {
    super(model);
    this.join = this.join.bind(this);
    this.leave = this.leave.bind(this);
    this.quit = this.quit.bind(this);
  }

  async join(data) {
    try {
      // insert user and return details
      const user = await this.insert(data);
      // get all members
      const members = await this.getAll({ room: data.room });
      // return details
      return {
        error: false,
        data: {
          room: user.room,
          members,
        },
      };
    } catch (error) {
      // return error details
      return {
        error: true,
        message: "Could not join room",
      };
    }
  }

  async leave(data) {
    try {
      // insert user and return details
      await this.delete(data);
      // get all members
      const members = await this.getAll({ room: data.room });
      // return details
      return {
        error: false,
        data: {
          room: data.room,
          members,
        },
      };
    } catch (error) {
      // return error details
      return {
        error: true,
        message: "Error while leaving room",
      };
    }
  }

  async quit(data) {
    try {
      // insert user and return details
      await this.delete(data);
      // return details
      return {
        error: false,
        data: {
          room: null,
          members: [],
        },
      };
    } catch (error) {
      // return error details
      return {
        error: true,
        message: "Admin has left the room",
      };
    }
  }
}

export default SocketService;
