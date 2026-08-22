import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const useGetUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchUser = async () => {
            try {
                axios.defaults.withCredentials = true;
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
                const res = await axios.get(`${apiUrl}/api/v1/user/profile`);
                dispatch(setAuthUser(res.data));
            } catch (error) {
                console.log(error);
                if (error.response?.status === 401) {
                    dispatch(setAuthUser(null));
                }
            }
        };
        fetchUser();
    }, [dispatch]);
};

export default useGetUser;