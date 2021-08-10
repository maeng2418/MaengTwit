import { createSlice } from '@reduxjs/toolkit';
import dummyData from 'assets/dummyData.json';
import { IUser } from 'assets/types';

const initialState = {
  isLoggedIn: false as boolean,
  user: null as IUser | null,
  signUpData: {},
  loginData: {},
};

// Slice
const slice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signUp: (state, { payload }) => {
      state.signUpData = payload;
    },
    login: (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = dummyData.user as IUser;
      state.loginData = payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { signUp, login, logout } = slice.actions;

export default slice.reducer;
