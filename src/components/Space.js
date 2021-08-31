import React, { useState } from "react";

const Space = ({ children }) => {
  const [selectedSpace, setSelectedSpace] = useState(false);

  return (
    <div
      className={`space ${selectedSpace ? "selected" : ""}`}
      onClick={() => setSelectedSpace(!selectedSpace)}
    >
      <h2>{children}</h2>
    </div>
  );
};

export default Space;
