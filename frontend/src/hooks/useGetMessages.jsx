import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetMessages = () => {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.defaults.withCredentials = true;
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
        const res = await axios.get(
          `${apiUrl}/api/v1/message/${selectedUser?._id}`,
        );

        dispatch(setMessages(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    if (selectedUser?._id) {
      dispatch(setMessages(null));
      fetchMessages();
    }
  }, [selectedUser?._id, dispatch]);
};

export default useGetMessages;
