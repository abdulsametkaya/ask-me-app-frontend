import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: {},
    isPostLoading: false,
  },
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { getPosts } = postSlice.actions;
export default postSlice.reducer;
