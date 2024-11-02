import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorageData } from "../../utils/helperFunctions";
import { dbDefaultTables } from "../../utils/constants";

const { todos } = getLocalStorageData("db") || dbDefaultTables;

const slice = createSlice({
  name: "Todos",
  initialState: todos,
  reducers: {},
});

export default slice.reducer;
