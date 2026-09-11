import React from "react";

function RenderError() {
  throw new Error("Render Error");

  return <h2>This will not show</h2>;
}

export default RenderError;