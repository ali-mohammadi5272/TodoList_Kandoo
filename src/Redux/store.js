import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todosReducer from "./stores/Todos";

const store = configureStore({
  reducer: combineReducers({
    todos: todosReducer,
  }),
});

export default store;
