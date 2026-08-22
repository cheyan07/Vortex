import React, { createContext, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { setOnlineUsers } from "../redux/userSlice";

const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authUser) {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
      const newSocket = io(apiUrl, {
        query: {
          userId: authUser._id,
        },
      });

      newSocket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers));
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
        setSocket(null);
      };
    } else {
      setSocket((prevSocket) => {
        if (prevSocket) {
          prevSocket.close();
        }
        return null;
      });
      dispatch(setOnlineUsers([]));
    }
  }, [authUser, dispatch]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
