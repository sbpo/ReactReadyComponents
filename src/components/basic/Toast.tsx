import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import uuid from "uuid";
const appRoot = document.getElementById("root");

const Toast: (message: string, time?: number) => void = (message, time) => {
  let div = document.getElementById("notification-center");
  if (!div) {
    div = document.createElement("div");
    div.setAttribute("id", "notification-center");
    if (appRoot) {
      appRoot.appendChild(div);
    } else {
      document.body.appendChild(div);
    }
  }
  const notificaionID = uuid();
  ReactDOM.render(<TheToast msg={message} time={time} notificaionID={notificaionID} />, div);
};

export default Toast;

const TheToast: React.FC<{ msg: string; time?: number; notificaionID: string }> = ({
  msg,
  time,
  notificaionID,
}) => {
  const [showMsg, setshowMsg] = useState(true);
  useEffect(() => {
    setshowMsg(true);
    setTimeout(() => setshowMsg(false), time ? time : 1500);
  }, [msg, notificaionID]);

  if (showMsg)
    return (
      <div className="fixed top-0 left-1/2 -ml-32 w-64 mt-4 py-2 px-4 shadow-lg text-sm bg-white border border-gray-300 rounded">
        {msg}
      </div>
    );
  else return <div></div>;
};
