import React, { useState, useRef, useEffect } from "react";
import { Icon } from "antd";

interface Props {
  unRelative?: true;
  tooltipPos?: string;
  className?: string;
}

const InfoTag: React.FC<Props> = ({ children, unRelative, tooltipPos, className }) => {
  const [hovered, sethovered] = useState(false);
  const [clicked, setclicked] = useState(false);

  //clickhandler for closing
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = (e: MouseEvent) => {
    if (ref.current && e.target instanceof Node && ref.current.contains(e.target)) {
      return;
    }
    setclicked(false);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      setclicked(false);
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`h-4 w-4 rounded-full bg-gray-600 flex items-center justify-center ${
        unRelative ? "" : "relative"
      }
      ${className ? className : ""}`}
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
      onClick={() => setclicked(true)}
    >
      <Icon type="info" style={{ fontSize: "0.75rem", color: "#fff" }} />
      {(hovered || clicked) && (
        <div
          className={`absolute z-50 px-4 py-4 bg-white shadow-xl rounded border ${
            tooltipPos ? tooltipPos : "top-0 mt-6 left-0"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default InfoTag;
