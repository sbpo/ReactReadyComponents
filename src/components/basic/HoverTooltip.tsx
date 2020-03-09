import React, { useState, useRef, useEffect } from "react";

interface Props {
  className?: string;
  text: string;
}

const HoverTooltip: React.FC<Props> = ({ children, className, text }) => {
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
      className={`relative z-10 ${className ? className : ""}`}
      onMouseEnter={() => {
        sethovered(true);
      }}
      onMouseLeave={() => sethovered(false)}
      onClick={() => setclicked(true)}
    >
      {children}
      {(hovered || clicked) && (
        <div
          className={`absolute z-50 px-2 py-2 bg-white shadow-xl rounded border 
           top-0 mt-2 left-0 text-xs whitespace-no-wrap
          `}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default HoverTooltip;
