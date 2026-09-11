import React from "react";

function EventError() {
  const handleClick = () => {
    throw new Error("Event Handler Error");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default EventError;