// import { createSlice } from "@reduxjs/toolkit";
// import data from "../../data.json";

// const initialState = {
//   tasks: JSON.parse(localStorage.getItem("tasks")) || data.tasks,
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       const newTask = {
//         id: Date.now(),
//         ...action.payload,
//       };
//       state.tasks.push(newTask);

//       // persist
//       localStorage.setItem("tasks", JSON.stringify(state.tasks));
//     },
//    deleteTask: (state, action) => {
//   state.tasks = state.tasks.filter((task) => task.id !== action.payload);

//   // persist
//   localStorage.setItem("tasks", JSON.stringify(state.tasks));
// },
//   },
// });

// export const { addTask, deleteTask } = tasksSlice.actions;
// export default tasksSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || data.tasks,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log("Reducer received action:", action.payload);
      const newTask = {
        id: Date.now(),
        status: "active", 
        ...action.payload,
      };
      console.log("New Task to be added:", newTask);
      state.tasks.push(newTask);
      console.log("Updated Tasks List:", state.tasks);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);

      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTaskComplete: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload
        ? {
            ...task,
             status: task.status === "completed" ? "active" : "completed",
          }
          : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, deleteTask, toggleTaskComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
