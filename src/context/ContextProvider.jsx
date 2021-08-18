import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import io from "socket.io-client";

const AppContext = createContext(null);

// custom context hook
export const useAppContext = () => useContext(AppContext);

export default function ContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (user && !socket) setSocket(io("http://localhost:8050"));
  }, [user]);

  const store = {
    setUser,
    user,
    socket,
    setSocket,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}
