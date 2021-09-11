import React from "react";

const ProgressBar = ({ progress }) => {
  function getBackground() {
    const background = {
      25: "bg-danger",
      50: "bg-info",
      75: "bg-warning",
      100: "bg-success",
      default: "",
    };

    return background[progress] || background.default;
    
    // switch (progress) {
    //   case 25:
    //     return "bg-danger";
    //   case 50:
    //     return "bg-info";
    //   case 75:
    //     return "bg-warning";
    //   case 100:
    //     return "bg-success";
    //   default:
    //     return "";
    // }
  }

  return (
    <div className="progress">
      <div
        className={`progress-bar ${getBackground()}`}
        role="progressbar"
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ProgressBar;
