import { logout } from "./useSlice";

export const logoutUser = (dispatch) => {
  try {
    dispatch(logout());
  } catch (error) {
    console.error("Login failed:", error);
  }
};
