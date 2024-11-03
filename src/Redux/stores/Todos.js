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
    updateTodo: (state, action) => {},
    removeOne: (state, action) => {
      const todos = state.filter((todo) => todo.id !== action.payload);
      setLocalStorageData("db", { todos });
      return todos;
    },
  },
});

export const { create, updateTodo, removeOne } = slice.actions;

export default slice.reducer;
