import { useEffect, useState } from "react";

export const useMaxHeightTransition = (
  small: string,
  large: string,
  time?: number,
  initialState?: string
) => {
  const [maxHeight, setmaxHeight] = useState(initialState || small);
  const [open, setisOpen] = useState(false);
  useEffect(() => {
    open && setmaxHeight(large);
  }, [open]);
  const setOpen = (newState: boolean) => {
    if (newState) {
      setisOpen(true);
    } else {
      setmaxHeight(small);
      setTimeout(() => setisOpen(false), time ? time : 100);
    }
  };
  const style = {
    maxHeight: `${maxHeight}`,
    transition: `max-height ${time ? time / 1000 : 0.1}s ease-in`,
  };
  return { open, setOpen, style };
};
