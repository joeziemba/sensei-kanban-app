import React from "react";

export const TaskCard = ({ task, changeStatus }) => {
  const handleLeftClick = () => {
    changeStatus(task.id, task.status - 1);
  };

  const handleRightClick = () => {
    changeStatus(task.id, task.status + 1);
  };

  return (
    <div className="bg-white text-black rounded-md p-2 mb-3 flex justify-between">
      {task.status !== 0 && (
        <button className="mr-2" onClick={handleLeftClick}>
          {"<"}
        </button>
      )}
      <p className="flex-1">{task.text}</p>
      {task.status !== 3 && (
        <button className="ml-2" onClick={handleRightClick}>
          {" "}
          {">"}{" "}
        </button>
      )}
    </div>
  );
};
