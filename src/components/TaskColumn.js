import React from "react";

export const TaskColumn = ({ children }) => {
  return (
    <div
      id="task-column"
      className="bg-gray-800 p-3 rounded-md"
      style={{ minHeight: "500px" }}
    >
      {children}
    </div>
  );
};
