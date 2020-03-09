import React, { Component, useRef, useState, useEffect } from "react";
import { useClickOutsideEffect } from "utils/useClickOutside";
import { useMaxHeightTransition } from "utils/useMaxHeightTransition";

type Option = { id: string; display: string; val?: any };

interface Props {
  className?: string;
  options: Option[];
  selectedID?: string;
  placeholder?: string;
  flipped?: boolean;
  onSelect: (selected: Option) => void;
  onAddNew?: () => void;
}

const Dropdown: React.FC<Props> = ({
  className,
  options,
  selectedID,
  placeholder,
  onSelect,
  flipped,
  onAddNew,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { open, setOpen, style } = useMaxHeightTransition("0", "240px");

  useClickOutsideEffect(ref, () => {
    // close();
    setOpen(false);
  });

  const selected = options.find(o => o.id === selectedID);
  const display = selected ? selected.display : placeholder ? placeholder : "";

  return (
    <div className={`relative text-sm ${className ? className : ""}`} ref={ref}>
      <div
        className="flex items-center shadow cursor-pointer border border-gray-300 rounded pl-3 pr-2 py-1"
        onClick={() => setOpen(!open)}
      >
        <span className="flex-grow truncate">{display}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>

      {open && (
        <div
          className={`rounded border border-gray-200 shadow-lg overflow-hidden overflow-y-scroll absolute w-full  left-0 overflow-auto  z-10 bg-white
            ${flipped ? "bottom-0 mb-8" : "top-0 mt-8"}
          `}
          // style={{ maxHeight: maxHeight, transition: "max-height 5s ease-in" }}
          style={style}
        >
          {options.length > 0 ? (
            options.map(option => (
              <div
                className={`py-2 px-4 cursor-pointer hover:bg-gray-100`}
                key={option.id}
                onClick={() => {
                  onSelect(option);
                  // close();
                  setOpen(false);
                }}
              >
                {option.display}
              </div>
            ))
          ) : (
            <div className={`py-2 px-4`}>no options...</div>
          )}
          {onAddNew && (
            <button
              onClick={() => {
                onAddNew();
                setOpen(false);
              }}
              className={`py-2 w-full hover:bg-gray-100 focus:outline-none border-t border-gray-200`}
            >
              Add new
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
