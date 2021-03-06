import { generateID } from "../utils/random";
import { results } from "../utils";
import Service from "./Service";

class SocketService extends Service {
  constructor(model) {
    super(model);
    this.join = this.join.bind(this);
    this.create = this.create.bind(this);
    this.leave = this.leave.bind(this);
    this.quit = this.quit.bind(this);
    this.end = this.end.bind(this);
  }

  async join(data) {
    try {
      // find room
      await this.get({ room: data.room });
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
          socket_id: user.socket_id,
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

  async create(data) {
    try {
      // generate random room id
      data.room = generateID();
      // insert user and return details
      const user = await this.insert(data);
      // return details
      return {
        error: false,
        data: {
          room: user.room,
          members: [user],
          socket_id: user.socket_id,
        },
      };
    } catch {
      return {
        error: true,
        message: "Could not join room",
      };
    }
  }

  async leave(data) {
    try {
      // insert user and return details
      await this.delete({ socket_id: data.socket_id });
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
      console.log(error);
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
      await this.deleteAll(data);
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

  async end(data) {
    try {
      // get all members
      const members = await this.getAll({ room: data.room });
      // add player results
      results.insert(data);
      // get result
      const result = results.getAll(data.room);
      if (members.length !== result.length) throw new Error("error");
      // add up all scores
      const scores = results.total(data.room);
      //console.log(scores);

      return {
        error: false,
        scores,
      };
    } catch (error) {
      console.log(error);
      return {
        error: true,
      };
    }
  }
}

export default SocketService;
