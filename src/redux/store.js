import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reduce/noteSlice";
import tasksReducer from "./reduce/taskSlice";
import userReducer from "./reduce/userSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    tasks: tasksReducer,
    user: userReducer,
  },
});

export default store;
