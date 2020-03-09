import React from "react";
import custom from "../../resources/machines/custom.svg";
import autoSuggest from "../../resources/autosuggestMachine.svg";
import unit500 from "../../resources/machines/unit-500.svg";
import unit1000 from "../../resources/machines/unit-1000.svg";
import module2000 from "../../resources/machines/module-2000.svg";
import module3000 from "../../resources/machines/module-3000.svg";
import module4000 from "../../resources/machines/module-4000.svg";
import custom5000low from "../../resources/machines/custom-5000-low.svg";
import custom5000medium from "../../resources/machines/custom-5000-medium.svg";
import custom5000high from "../../resources/machines/custom-5000-high.svg";
import custom10000low from "../../resources/machines/custom-10000-low.svg";
import custom10000medium from "../../resources/machines/custom-10000-medium.svg";
import custom10000high from "../../resources/machines/custom-10000-high.svg";
import custom15000low from "../../resources/machines/custom-15000-low.svg";
import custom15000medium from "../../resources/machines/custom-15000-medium.svg";
import custom15000high from "../../resources/machines/custom-15000-high.svg";

interface Props {
  machineID: string;
  className?: string;
}

export const MachineIcon: React.FC<Props> = ({ machineID, className }) => {
  const src = getMachineImage(machineID);
  return <img className={className} alt="machine icon" src={src} />;
};

export const getMachineImage = (machineID: string) => {
  let src: string;

  switch (machineID) {
    case "autosuggest":
      src = autoSuggest;
      break;
    case "Unit-500":
      src = unit500;
      break;
    case "Unit-1000":
      src = unit1000;
      break;
    case "Module-2000":
      src = module2000;
      break;
    case "Module-3000":
      src = module3000;
      break;
    case "Module-4000":
      src = module4000;
      break;
    case "Custom-5000-Low":
      src = custom5000low;
      break;
    case "Custom-5000-Medium":
      src = custom5000medium;
      break;
    case "Custom-5000-High":
      src = custom5000high;
      break;
    case "Custom-10000-Low":
      src = custom10000low;
      break;
    case "Custom-10000-Medium":
      src = custom10000medium;
      break;
    case "Custom-10000-High":
      src = custom10000high;
      break;
    case "Custom-15000-Low":
      src = custom15000low;
      break;
    case "Custom-15000-Medium":
      src = custom15000medium;
      break;
    case "Custom-15000-High":
      src = custom15000high;
      break;
    default:
      src = custom;
  }
  return src;
};
