import React, { useId, useState } from "react";
import "../Css/TaskForm.css"

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [error, setError] = useState("");

  const taskInputId = useId();
  const priorityInputId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (taskName.trim() === "") {
      setError("Please enter a task name.");
      return;
    }

    // Send data to Dashboard
    onAddTask({
      title: taskName,
      priority: priority,
    });

    // Reset form
    setTaskName("");
    setPriority("Medium");
    setError("");
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor={taskInputId}>
          Task Name
        </label>

        <input
          id={taskInputId}
          type="text"
          placeholder="Enter task..."
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
            setError("");
          }}
        />

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}
      </div>

      <div className="input-group">
        <label htmlFor={priorityInputId}>
          Priority
        </label>

        <select
          id={priorityInputId}
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >
          <option value="High">
            High Priority
          </option>

          <option value="Medium">
            Medium Priority
          </option>

          <option value="Low">
            Low Priority
          </option>
        </select>
      </div>

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;