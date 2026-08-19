import React from "react";
import { TbSendFilled } from "react-icons/tb";

const SendInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message..."
          className="border text-sm rounded-lg block w-full p-3 border-zinc-500 bg-gray-600 text-white"
        />
        <button className="absolute flex inset-y-0 end-0 items-center pr-4">
            <TbSendFilled />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
