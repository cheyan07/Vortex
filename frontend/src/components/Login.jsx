import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      
        navigate("/");
        console.log(res);
        dispatch(setAuthUser(res.data));
      
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }

    setUser({
      userName: "",
      password: "",
    });
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div className="mb-4">
            <label className="Label block mb-4">
              <span className="text-base label-text font-bold">
                User Name:{" "}
              </span>
            </label>
            <input
              value={user.userName}
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
              className="w-full input input-bordered h-10 rounded-lg"
              type="text"
              placeholder=" Username"
            />
          </div>
          <div className="mb-4">
            <label className="Label block mb-4">
              <span className="text-base label-text font-bold">Password: </span>
            </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-10 rounded-lg"
              type="password"
              placeholder=" Password"
            />
          </div>

          <p className="text-center my-2 text-black">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 font-semibold">
              {"  "}
              Signup{" "}
            </Link>
          </p>
          <div>
            <button type="submit" className="btn btn-block btn btn-info">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
