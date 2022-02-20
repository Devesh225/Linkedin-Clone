import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({  /* userSlice for Application Wide User Information */
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: { /* Manipulating State */
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user; /* Pulling the state from the Data Layer, these are called Selectors */
export default userSlice.reducer;
