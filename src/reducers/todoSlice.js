import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  status: null,
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default todoSlice.reducer;
