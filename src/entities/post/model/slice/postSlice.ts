import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../api/postsApi';

export const postsAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) => a.id - b.id,
});

export const postSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    postAdded: postsAdapter.addOne,
    postsReceived: (state, action: PayloadAction<Post[]>) => {
      postsAdapter.setAll(state, action.payload);
    },
    postUpdated: postsAdapter.updateOne,
    postDeleted: postsAdapter.removeOne,
  },
});

export const { postAdded, postsReceived, postUpdated, postDeleted } = postSlice.actions;

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors();

export default postSlice.reducer;