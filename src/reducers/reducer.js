import { configureStore, combineReducers } from "@reduxjs/toolkit";

import postsSlice from "./postsSlice";
import todoSlice from "./todoSlice";
import usersSlice from "./usersSlice";
import albumsSlice from "./albumsSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  posts: postsSlice,
  todos: todoSlice,
  albums: albumsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export const selectUsers = (state) => state.users.users;
export const selectPosts = (state) => state.posts.posts;
export const selectTodos = (state) => state.todos.todos;
export const selectAlbums = (state) => state.albums.albums;

export default store;
