import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import io from "socket.io-client";
import { useNotification } from "../hooks";

const AppContext = createContext(null);

// custom context hook
export const useAppContext = () => useContext(AppContext);

export default function ContextProvider({ children }) {
  // user state
  const [user, setUser] = useState(null);
  // socket state
  const [socket, setSocket] = useState(null);
  const [socketId, setSocketId] = useState(null);
  const [room, setRoom] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [details, setDetails] = useState(null);
  const [businesses, setBusinesses] = useState(null);
  const [members, setMembers] = useState(null);
  // api data
  const [nearby, setNearby] = useState(null);
  const [favorites, setFavorites] = useState(null);
  // hooks
  const { notify } = useNotification();

  // initialize socket.io
  useEffect(() => {
    if (user && !socket) {
      // create socket on user login/register
      const webSocket = io("http://localhost:8050");
      // set global context socket
      setSocket(webSocket);

      webSocket.on("new:join-room", (data) => {
        setMembers(data.members);
      });
      webSocket.on("new:quit-room", (data) => {
        setMembers([]);
        setRoom(null);
        setSocketId(null);
        notify({
          title: "Error",
          description: data.message,
          status: "error",
        });
      });

      // set error handling for socket
      webSocket.on("error:all", (res) => {
        notify({
          title: "Error",
          description: res,
          status: "error",
        });
      });
    }
  }, [user]);

  const store = {
    setUser,
    user,
    socket,
    setSocket,
    room,
    setRoom,
    members,
    setMembers,
    details,
    setDetails,
    isAdmin,
    setIsAdmin,
    socketId,
    setSocketId,
    setBusinesses,
    businesses,
    nearby,
    setNearby,
    favorites,
    setFavorites,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
