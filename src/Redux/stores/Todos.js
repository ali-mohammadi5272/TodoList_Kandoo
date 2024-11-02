import { createSlice } from "@reduxjs/toolkit";
import { dbDefaultTables } from "../../utils/constants";
import {
  createTodo,
  getLocalStorageData,
  setLocalStorageData,
} from "../../utils/helperFunctions";

const { todos } = getLocalStorageData("db") || dbDefaultTables;

const slice = createSlice({
  name: "Todos",
  initialState: todos,
  reducers: {
    create: (state, action) => {
      const newTodo = createTodo(action.payload);
      state.push(newTodo);
      setLocalStorageData("db", { todos: state });
    },
    updateTitle: (state, action) => {},
    updateStatus: (state, action) => {},
    removeOne: (state, action) => {},
  },
});

export const { create, updateTitle, updateStatus, removeOne } = slice.actions;

export default slice.reducer;
