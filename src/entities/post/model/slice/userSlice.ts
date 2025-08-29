import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../user/api/usersApi';

export const usersAdapter = createEntityAdapter<User>({
  sortComparer: (a, b) => a.id - b.id,
});

const initialState = usersAdapter.getInitialState();

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: usersAdapter.addOne,
    usersReceived: (state, action: PayloadAction<User[]>) => {
      usersAdapter.setAll(state, action.payload);
    },
    userUpdated: usersAdapter.updateOne,
    userDeleted: usersAdapter.removeOne,
    clearAllUsers: usersAdapter.removeAll,
  },
});

export const { 
  userAdded, 
  usersReceived, 
  userUpdated, 
  userDeleted, 
  clearAllUsers 
} = userSlice.actions;

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectTotal: selectTotalUsers,
} = usersAdapter.getSelectors();

export default userSlice.reducer;