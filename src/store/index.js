import { configureStore } from "@reduxjs/toolkit";

import userReducer from "features/authentication/hooks/useSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
