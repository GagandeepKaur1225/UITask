import { createSlice } from '@reduxjs/toolkit';
const slice = createSlice({
  name: 'welcome',
  initialState: {
    progress: 0,
    showSkip: 0,
    showStart: 0,
    indexList: 0,
    loggedUser: '',
    welcomeShown: false,
    nameUser: '',
    email: '',
  },
  reducers: {
    ChangeProgress: (initialState, payload) => {
      initialState.progress = payload.payload;
    },
    changeSkip: (initialState, payload) => {
      initialState.showSkip = 1;
    },
    changeStart: (initialState, payload) => {
      initialState.showStart = 1;
    },
    changeIndex: (initialState, payload) => {
      initialState.indexList = payload.payload;
    },
    addUser: (initialState, payload) => {
      initialState.loggedUser = payload.payload;
    },
    addEmail: (initialState, payload) => {
      initialState.email = payload.payload;
    },
    changeLogin: (initialState, payload) => {
      initialState.loggedUser = '';
    },
    setWelcome: (initialState, payload) => {
      initialState.welcomeShown = true;
    },
  },
});
export const {
  ChangeProgress,
  changeSkip,
  changeStart,
  changeIndex,
  addUser,
  changeLogin,
  setWelcome,
  addEmail,
} = slice.actions;
export default slice.reducer;
