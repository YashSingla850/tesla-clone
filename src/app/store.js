import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/carslide/CarSlide";
export const store = configureStore({
  reducer: {
    car: carReducer,
  },
});
