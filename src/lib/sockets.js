import { useAppContext } from "../context/ContextProvider";

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
  const { socket } = useAppContext();

  const emit = (msg, data) => socket.emit(msg, data);
  const on = (msg, callback) => socket.on(msg, (data) => callback(data));

  return { emit, on };
};
