import React from "react";
import { Icon } from "antd";

interface Props {
  marginRight: string;
}

const LoadingIcon: React.FC<Props> = ({ marginRight }) => {
  return (
    <Icon
      style={{
        position: "absolute",
        color: "black",
        right: marginRight,
        top: "50%",
        marginTop: "-0.375rem",
        fontSize: "0.75rem",
        zIndex: 10,
      }}
      type="loading"
    />
  );
};

export default LoadingIcon;
