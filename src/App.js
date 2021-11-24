import cuid from "cuid";
import { useState } from "react";
import "./App.css";
import { ColumnContainer } from "./components/ColumnContainer";
import { TaskCard } from "./components/TaskCard";
import { TaskColumn } from "./components/TaskColumn";

const TaskStatus = {
  backlog: 0,
  progress: 1,
  qa: 2,
  done: 3,
};

const task = {
  id: cuid(),
  text: "This is a sample task, change my status!",
  status: TaskStatus.backlog,
};

function App() {
  const [tasks, setTasks] = useState([task]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const changeStatus = (taskId, newStatus) => {
    const newTasks = [...tasks];

    const taskToUpdate = newTasks.find((task) => task.id === taskId);
    taskToUpdate.status = newStatus;

    setTasks(newTasks);
  };

  const backlogTasks = tasks.filter(
      (task) => task.status === TaskStatus.backlog
    ),
    progressTasks = tasks.filter((task) => task.status === TaskStatus.progress),
    qaTasks = tasks.filter((task) => task.status === TaskStatus.qa),
    doneTasks = tasks.filter((task) => task.status === TaskStatus.done);

  return (
    <div className="p-8" style={{ maxWidth: "1280px" }}>
      <div className="pb-6 border-b mb-6">
        <h1 className="text-3xl font-semibold">Hello Sensei</h1>
        <p className="text-2xl text-gray-400">Friday, August 14</p>
      </div>
      <div className="flex flex-wrap">
        <ColumnContainer
          header="Backlog"
          taskCount={backlogTasks.length}
          addTask={addTask}
          status={TaskStatus.backlog}
        >
          <TaskColumn>
            {backlogTasks
              .filter((task) => task.status === TaskStatus.backlog)
              .map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  changeStatus={changeStatus}
                />
              ))}
          </TaskColumn>
        </ColumnContainer>

        <ColumnContainer
          header="In Progress"
          taskCount={progressTasks.length}
          addTask={addTask}
          status={TaskStatus.progress}
        >
          <TaskColumn>
            {progressTasks.map((task) => (
              <TaskCard key={task.id} task={task} changeStatus={changeStatus} />
            ))}
          </TaskColumn>
        </ColumnContainer>

        <ColumnContainer
          header="Qa"
          taskCount={qaTasks.length}
          addTask={addTask}
          status={TaskStatus.qa}
        >
          <TaskColumn>
            {qaTasks.map((task) => (
              <TaskCard key={task.id} task={task} changeStatus={changeStatus} />
            ))}
          </TaskColumn>
        </ColumnContainer>

        <ColumnContainer
          header="Done"
          taskCount={doneTasks.length}
          addTask={addTask}
          status={TaskStatus.done}
        >
          <TaskColumn>
            {doneTasks.map((task) => (
              <TaskCard key={task.id} task={task} changeStatus={changeStatus} />
            ))}
          </TaskColumn>
        </ColumnContainer>
      </div>
    </div>
  );
}

export default App;
