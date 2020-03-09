import React, { useState, useRef, useEffect } from "react";

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
      className={`h-4 w-4 rounded-full flex items-center justify-center ${
        unRelative ? "" : "relative"
      }
      ${className ? className : ""}`}
      onMouseEnter={() => sethovered(true)}
      onMouseLeave={() => sethovered(false)}
      onClick={() => setclicked(true)}
    >
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z" />
      </svg>
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
