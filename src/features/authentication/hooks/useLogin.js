import { login } from "./useSlice";

export const loginUser = (data) => (dispatch) => {
  try {
    dispatch(login(data));
  } catch (error) {
    console.error("Login failed:", error);
  }
};
