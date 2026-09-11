import React from "react";

function TimeoutError() {
  const handleClick = () => {
    setTimeout(() => {
      throw new Error("Timeout Error");
    }, 1000);
  };

  return (
    <button onClick={handleClick}>
      Start Timer
    </button>
  );
}

export default TimeoutError;