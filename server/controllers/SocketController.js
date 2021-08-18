import { SocketModel } from "../models/Sockets";
import SocketService from "../services/UserService";
import { log } from "../utils";

const socketService = new SocketService(SocketModel);

class SocketController {
  constructor(service, io, socket) {
    this.service = service;
    this.socket = socket;
    this.io = io;

    // this.socket.on("join-room", this.join);
    // this.socket.on("leave-room", this.leave);
    // this.socket.on("quit-room", this.quit);
  }

  async _emitAll(room, msg, data) {
    this.io.to(room).emit(msg, data);
  }
  async _emit(msg, data) {
    this.socket.emit(msg, data);
  }

  async join(data) {
    // include user socket id
    data.socket_id = this.socket.id;
    // add user socket to db
    const details = await this.service.join(data);
    // send details
    if (!details.error) {
      // join user to socket room
      this.socket.join(details.room);
      // emit success messages
      this._emit("success:join-room", details.data);
      this._emitAll(details.room, "new:join-room", details.data);
    } else {
      this._emit("error:all", details.message);
    }
  }

  // async create(data) {
  //   // register user
  //   const details = await this.service.create(data);
  //   // send details
  //   if (!details.error) {
  //     this._emit("success:create-room", details.data);
  //   } else {
  //     this._emit("error:all", details.message);
  //   }
  // }

  async leave(data) {
    // remove user socket from database
    const details = await this.service.leave(data);
    // send details
    if (!details.error) {
      // join user to socket room
      this.socket.leave(data.room);
      // emit success messages
      this._emit("success:leave-room", { room: null, members: [] });
      this._emitAll(details.room, "new:join-room", details.data);
    } else {
      this._emit("error:all", details.message);
    }
  }
}

export function startSockets(io) {
  io.on("connection", (socket) => {
    new SocketController(socketService, io, socket);
    log.socket();
  });
}

// export const socketController = new SocketController(socketService);
