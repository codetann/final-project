import { SocketModel } from "../models/Sockets";
import SocketService from "../services/SocketService";
import { log } from "../utils";

const socketService = new SocketService(SocketModel);

class SocketController {
  constructor(service, io, socket) {
    this.service = service;
    this.socket = socket;
    this.io = io;

    this.socket.on("join-room", (data) => this.joinRoom(data));
    this.socket.on("create-room", (data) => this.createRoom(data));
    this.socket.on("leave-room", (data) => this.leaveRoom(data));
    this.socket.on("quit-room", (data) => this.quitRoom(data));
    this.socket.on("disconnect", () => this.disconnect());
  }

  async _emitAll(room, msg, data) {
    this.io.to(room).emit(msg, data);
  }
  async _emit(msg, data) {
    this.socket.emit(msg, data);
  }

  async joinRoom(data) {
    // sets user socket id
    data.socket_id = this.socket.id;
    // add user socket to db
    const details = await this.service.join(data);
    // send details
    if (!details.error) {
      // join user to socket room
      this.socket.join(details.data.room);
      // emit success messages
      this._emit("success:join-room", details.data);
      this._emitAll(details.data.room, "new:join-room", {
        members: details.data.members,
      });
    } else {
      this._emit("error:all", details.message);
    }
  }

  async createRoom(data) {
    // sets user socket id
    data.socket_id = this.socket.id;
    // register user
    const details = await this.service.create(data);
    // send details
    if (!details.error) {
      // join room
      this.socket.join(details.data.room);
      // emit details to user
      this._emit("success:create-room", details.data);
    } else {
      this._emit("error:all", details.message);
    }
  }

  async leaveRoom(data) {
    // remove user socket from database
    const details = await this.service.leave(data);
    // send details
    if (!details.error) {
      // emit success messages
      this._emit("success:leave-room", { room: null, members: [] });
      // remove user from socket room
      this.socket.leave(data.room);
      // emit quit room to all members
      this._emitAll(data.room, "new:join-room", details.data);
      // remove user from socket room
    } else {
      console.log(details.members);
      this._emit("error:all", details.message);
    }
  }

  async quitRoom(data) {
    // remove user socket from database
    const details = await this.service.quit(data);
    // send details
    if (!details.error) {
      // emit success messages
      this._emit("success:quit-room", { room: null, members: [] });
      // remove user from socket room
      this.socket.leave(data.room);
      // emit quit room to all members
      this._emitAll(data.room, "new:quit-room", {
        message: "Admin has left room",
      });
    } else {
      console.log(details.members);
      this._emit("error:all", details.message);
    }
  }

  async disconnect() {
    //
  }
}

export function startSockets(io) {
  io.on("connection", (socket) => {
    new SocketController(socketService, io, socket);
    log.socket();
  });
}

// export const socketController = new SocketController(socketService);
