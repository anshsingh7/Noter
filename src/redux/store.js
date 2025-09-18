import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reduce/noteSlice";
import tasksReducer from "./reduce/taskSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    tasks: tasksReducer,
  },
});

export default store;
