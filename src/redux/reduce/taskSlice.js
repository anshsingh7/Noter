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
      const newTask = {
        id: Date.now(),
        ...action.payload,
      };
      state.tasks.push(newTask);

      // persist
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
   deleteTask: (state, action) => {
  state.tasks = state.tasks.filter((task) => task.id !== action.payload);

  // persist
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
},
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
