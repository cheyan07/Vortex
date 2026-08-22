import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import { useSocket } from "../context/SocketContext";

const useGetRealTimeMessage = () => {
    const socket = useSocket();
    const { messages } = useSelector(store => store.message);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const handleNewMessage = (newMessage) => {
            dispatch(setMessages([...(messages || []), newMessage]));
        };

        socket?.on("newMessage", handleNewMessage);
        return () => socket?.off("newMessage", handleNewMessage);
    }, [socket, messages, dispatch]);
};

export default useGetRealTimeMessage;