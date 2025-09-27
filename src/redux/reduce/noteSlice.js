import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json"; 

const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || data.notes,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: Date.now(),
        ...action.payload,
      };
      state.notes.unshift(newNote);

      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      const newNote = {
        id: Date.now(),
        ...action.payload,
      };
      state.notes.unshift(newNote);

      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

export const { addNote,deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
