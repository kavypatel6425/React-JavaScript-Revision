import React, { useId, useReducer, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../Css/Style.css"
import TaskReducer, { initialState } from "../Reducer/TaskReducer";
import TaskForm from "../components/TaskForm";

function Dashboard() {
  const [state, dispatch] = useReducer(
    TaskReducer,
    initialState
  );

  const addTask = (taskData) => {
    dispatch({
      type: "addTask",
      payload: taskData,
    });
  };

  const taskInputId = useId();
  const priorityInputId = useId();

  const deleteTask = (id) => {
    dispatch({
      type: "deleteTask",
      payload: id,
    });
  };

  const toggleTask = (id) => {
    dispatch({
      type: "toggleTask",
      payload: id,
    });
  };

  const totalTasks = state.tasks.length;

  const completedTasks = state.tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = state.tasks.filter(
    (task) => !task.completed
  ).length;


  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "COMPLETED") return task.completed;
    if (state.filter === "PENDING") return !task.completed;
    return true;
  });

  return (
    <>
      <Header />

      <div className="main-layout">
        <Sidebar />

        <main className="dashboard">
          <h1>Dashboard</h1>

          <div className="dashboard-content">
            <div className="card">
              <h3>Total Tasks</h3>
              <p>{totalTasks}</p>
            </div>

            <div className="card">
              <h3>Completed</h3>
              <p>{completedTasks}</p>
            </div>

            <div className="card">
              <h3>Pending</h3>
              <p>{pendingTasks}</p>
            </div>
          </div>

          <TaskForm onAddTask={addTask} />


          <div className="filter-section">
            <button
              className={state.filter === "ALL" ? "active" : ""}
              onClick={() => dispatch({ type: "setFileter", payload: "ALL" })}
            >
              All
            </button>

            <button
              className={state.filter === "COMPLETED" ? "active" : ""}
              onClick={() => dispatch({ type: "setFileter", payload: "COMPLETED" })}
            >
              Completed
            </button>

            <button
              className={state.filter === "PENDING" ? "active" : ""}
              onClick={() => dispatch({ type: "setFileter", payload: "PENDING" })}
            >
              Pending
            </button>
          </div>


          <div className="task-list">
            <h2>My Tasks</h2>

            {filteredTasks.length === 0 ? (
              <p>No tasks available.</p>
            ) : (
              filteredTasks.map((task) => (
                <div className="task-item" key={task.id}>
                  <div className="task-info">
                    <span
                      className={task.completed ? "completed" : ""}

                    >
                      {task.title}
                    </span>

                    <span
                      className={`priority ${task.priority.toLowerCase()}`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  <button onClick={() => toggleTask(task.id)}>
                    Stause
                  </button>
                  <button onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="activity-log">
            <h2>Activity Log</h2>

            {state.activities.length === 0 ? (
              <p>No activity yet.</p>
            ) : (
              state.activities.map((activity) => (
                <div
                  className="activity-item"
                  key={activity.id}
                >
                  <span>📌 {activity.message}</span>
                </div>
              ))
            )}
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;