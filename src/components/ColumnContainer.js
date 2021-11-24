import cuid from "cuid";
import React from "react";

export const ColumnContainer = ({
  addTask,
  children,
  header,
  status,
  taskCount,
}) => {
  const handleClick = () => {
    const taskText = window.prompt();
    addTask({
      id: cuid(),
      status,
      text: taskText,
    });
  };

  return (
    <div className="flex-1 mr-3 column-container" style={{}}>
      <h2 className="text-2xl font-semibold">{header}</h2>
      <p className="text-sm text-gray-400 mb-3">{taskCount} Tasks</p>
      {children}
      <button onClick={handleClick} className="p-2 text-lg text-gray-400">
        + Add Task
      </button>
    </div>
  );
};
