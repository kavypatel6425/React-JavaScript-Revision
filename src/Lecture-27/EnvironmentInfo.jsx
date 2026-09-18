import React from "react";

function EnvironmentInfo() {
  return (
    <div>
      <h2>Application Information</h2>

      <p>
        <strong>Application Name:</strong>{" "}
        {import.meta.env.VITE_APP_NAME}
      </p>

      <p>
        <strong>API URL:</strong>{" "}
        {import.meta.env.VITE_API_URL}
      </p>

      <p>
        <strong>Application Version:</strong>{" "}
        {import.meta.env.VITE_APP_VERSION}
      </p>
    </div>
  );
}

export default EnvironmentInfo;