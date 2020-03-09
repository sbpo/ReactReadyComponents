import React from "react";

interface Props {
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ onClose, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen flex justify-center items-center z-10`}
    >
      <div
        onClick={onClose}
        className={`fixed top-0 bg-gray-800 left-0 w-full h-screen opacity-75 z-20`}
      />
      {children}
    </div>
  );
};

export default Modal;
