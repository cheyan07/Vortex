import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate=useNavigate();


  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:8080/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }

    setUser({
      fullName: "",
      userName: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">Signup</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div className="mb-4">
            <label className="Label block mb-4">
              <span className="text-base label-text font-bold">
                Full Name:{" "}
              </span>
            </label>
            <input
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full input input-bordered h-10 rounded-lg"
              type="text"
              placeholder=" Patil"
            />
          </div>

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

          <div className="mb-4">
            <label className="Label block mb-4">
              <span className="text-base label-text font-bold">
                Confirm Password:{" "}
              </span>
            </label>
            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full input input-bordered h-10 rounded-lg"
              type="password"
              placeholder=" Password"
            />
          </div>

          <div className="flex items-center my-4">
            <div className="flex items-center font-bold">
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.gender === "male"}
                onChange={() => handleCheckbox("male")}
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center font-bold">
              <p>Female</p>
              <input
                type="checkbox"
                checked={user.gender === "female"}
                onChange={() => handleCheckbox("female")}
                className="checkbox mx-2"
              />
            </div>
          </div>

          <p className="text-center my-2 text-black">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold">
              {"  "}
              Login{" "}
            </Link>
          </p>

          <div>
            <button type="submit" className="btn btn-block btn btn-info">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
