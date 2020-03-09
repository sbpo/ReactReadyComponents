import React from "react";
import "./styles/tailwind.css";
import LoadingIcon from "components/basic/LoadingIcon/LoadingIcon";
import InfoTag from "components/basic/InfoTag";

const App = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="text-4xl italic">My custom components</div>
      <LoadingIcon />
      <InfoTag>Hello content...</InfoTag>
    </div>
  );
};

export default App;
