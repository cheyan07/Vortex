import React, { useState } from "react";
import { LuUserRoundSearch } from "react-icons/lu";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setSelectedUser } from "../redux/userSlice";
import { setMessages } from "../redux/messageSlice";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { otherUsers } = useSelector(store => store.user);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080';
      const res = await axios.post(`${apiUrl}/api/v1/user/logout`, {}, { withCredentials: true });
      toast.success(res.data?.message || "Logged out successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to logout");
    }
    dispatch(setAuthUser(null));
    dispatch(setSelectedUser(null));
    dispatch(setMessages(null));
    navigate("/login");
  };

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    const query = search.toLowerCase().trim();
    const conversationUser = otherUsers?.find((user) => 
      user.fullName?.toLowerCase().includes(query) || 
      user.userName?.toLowerCase().includes(query)
    );
    if (conversationUser) {
      dispatch(setSelectedUser(conversationUser));
      setSearch("");
    } else {
      toast.error("User not found!");
    }
  };

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form onSubmit={searchSubmitHandler} action="" className="flex items-center gap-2">
        <input
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
          className="input input-bordered rounded-md"
          type="text"
          placeholder="Search.."
        />

        <button type="submit" className="btn  bg-purple-800 text-white">
          <LuUserRoundSearch className="w-6 h-6 outline-none" />
        </button>
      </form>

      <div className="divider px-3"></div>
      <OtherUsers />

      <div className="mt-2">
        <button onClick={logoutHandler} className="btn btn-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
