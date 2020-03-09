import { useEffect } from "react";

export const useClickOutsideEffect = (
  ref: React.RefObject<HTMLDivElement>,
  onClickOutside: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && e.target instanceof Node && ref.current.contains(e.target)) {
      return;
    }
    onClickOutside();
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref]);
};
