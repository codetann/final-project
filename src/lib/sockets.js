import { useState } from "react";
import { useAppContext } from "../context/ContextProvider";
import { useNotification } from "../hooks/useNotification";

// class WebSocket {
//   constructor(url) {
//     this.socket = io(url);
//   }

//   emit(msg, data) {
//     this.socket.emit(msg, data);
//   }

//   on(msg, callback) {
//     this.socket.on(msg, (data) => {
//       callback(data);
//     });
//   }
// }

// const webSocket = new WebSocket("http://localhost:8050");

export const useSockets = () => {
  const {
    socket,
    setRoom,
    room,
    members,
    setMembers,
    details,
    setDetails,
    isAdmin,
    setIsAdmin,
    setSocketId,
    socketId,
    businesses,
    setBusinesses,
  } = useAppContext();

  const emit = (msg, data) => socket.emit(msg, data);
  const on = (msg, callback) => socket.on(msg, (data) => callback(data));

  const createRoom = (data) => {
    setIsAdmin(true);
    setDetails(data.details);
    setRoom(data.room);
    setMembers(data.members);
    setSocketId(data.socket_id);
  };

  const joinRoom = (data) => {
    setRoom(data.room);
    setMembers(data.members);
    setSocketId(data.socket_id);
  };

  const updateRoom = (data) => [setMembers(data.members)];

  const leaveRoom = () => {
    setRoom(null);
    setMembers([]);
    setSocketId(null);
  };

  const quitRoom = () => {
    setRoom(null);
    setMembers([]);
    setSocketId(null);
    setIsAdmin(null);
    setDetails(null);
  };

  const startGame = (data) => {
    setBusinesses(data);
  };

  return {
    emit,
    on,
    isAdmin,
    room,
    members,
    createRoom,
    joinRoom,
    details,
    updateRoom,
    leaveRoom,
    socketId,
    quitRoom,
    startGame,
  };
};
