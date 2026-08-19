import React from "react";
import Messages from "./Messages.jsx";
import SendInput from "./SendInput.jsx";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[750px] flex flex-col">
      <div className="flex gap-2 items-center bg-zinc-800 text-white px-5 py-2 mb-2">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://tinyurl.com/5b9a9hrv" alt="user-profile" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>Chetan Patil</p>
          </div>
        </div>
      </div>

      <Messages/>
      <SendInput/>
    </div>
  );
};

export default MessageContainer;
