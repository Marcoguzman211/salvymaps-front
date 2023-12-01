import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/authReducer";

export const store = configureStore({
  reducer: {
    reducer: {
      auth: authSliceReducer,
    },
  },
});
