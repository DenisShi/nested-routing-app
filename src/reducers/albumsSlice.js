import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  albums: [],
  status: null,
  error: null,
};

export const fetchAlbums = createAsyncThunk("albums/fetchAlbums", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();
  return data;
});

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.albums = action.payload;
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default albumsSlice.reducer;
