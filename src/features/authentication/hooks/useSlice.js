import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    isError: null,
    isAuth: !!localStorage.getItem("token"),
  },
  reducers: {
    login: (state, action) => {
      if (action.payload.name === "Oybek") {
        state.user = action.payload;
        state.isAuth = true;
        state.isError = false;
        localStorage.setItem("token", "token");
      } else {
        state.isError = true;
        state.isAuth = false;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectError = (state) => state.user.isError;
export const selectAuth = (state) => state.user.isAuth;

export default userSlice.reducer;
