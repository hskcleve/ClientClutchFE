import React from "react";

export default function CallerBubble({ msg, index }) {
  function formatTimestamp(timestamp) {
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }
  return (
    <div
      className="flex flex-col font-extralight text-sm rounded-lg py-5 px-5 gap-5"
      //style={{ backgroundColor: "rgba(0,0,0,0.27)" }}
    >
      <div className="flex gap-3 items-center justify-end flex-row-reverse">
        <span className=" text-gray-500 font-light text-xs">
          {formatTimestamp(msg.timestamp)}
        </span>
        <span className="font-semibold">{`Customer (+65 9090 9090)`}</span>
        <div className="flex items-center w-8">
          <img
            alt="box"
            className="h-8"
            src={require("./assets/custBox.png")}
          />
          <img
            alt="phone"
            className="h-4 relative right-6"
            src={require("./assets/custPhone.png")}
          />
        </div>
      </div>
      <span className={`flex-grow text-left`}>{msg.message}</span>
    </div>
  );
}
