export const initialState = {
    tasks: [],
    filter: "ALL",
    activities: [],
};

export default function TaskReducer(state, action) {
    switch (action.type) {
        case "addTask": {
            const newTask = {
                id: Date.now(),
                title: action.payload.title,
                priority: action.payload.priority,
                completed: false,
            };

            return {
                ...state,

                tasks: [
                    ...state.tasks,
                    newTask,
                ],

                activities: [
                    {
                        id: Date.now() + 1,
                        message: `"${newTask.title}" was added`,
                    },
                    ...state.activities,
                ],
            };
        }

        case "deleteTask": {
            const deletedTask = state.tasks.find(
                (task) => task.id === action.payload
            );

            return {
                ...state,

                tasks: state.tasks.filter(
                    (task) => task.id !== action.payload
                ),

                activities: [
                    {
                        id: Date.now(),
                        message: deletedTask
                            ? `"${deletedTask.title}" was deleted`
                            : "Task was deleted",
                    },
                    ...state.activities,
                ],
            };
        }

        case "toggleTask": {
            const selectedTask = state.tasks.find(
                (task) => task.id === action.payload
            );

            return {
                ...state,

                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? {
                            ...task,
                            completed: !task.completed,
                        }
                        : task
                ),

                activities: [
                    {
                        id: Date.now(),
                        message: selectedTask?.completed
                            ? `"${selectedTask.title}" marked as pending`
                            : `"${selectedTask?.title}" marked as completed`,
                    },
                    ...state.activities,
                ],
            };
        }

        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            };

        default:
            return state;
    }
}