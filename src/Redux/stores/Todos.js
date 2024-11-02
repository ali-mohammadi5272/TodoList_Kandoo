import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageData } from "../../utils/helperFunctions";
import { dbDefaultTables } from "../../utils/constants";

const { todos } = getLocalStorageData("db") || dbDefaultTables;

const slice = createSlice({
  name: "Todos",
  initialState: todos,
  reducers: {
    create: (state, action) => {},
    updateTitle: (state, action) => {},
    updateStatus: (state, action) => {},
    removeOne: (state, action) => {},
  },
});

export const { create, updateTitle, updateStatus, removeOne } = slice.actions;

export default slice.reducer;
