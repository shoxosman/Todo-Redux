import { configureStore } from "@reduxjs/toolkit";
/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'
/* import LoginUserSlice from "../features/LoginUserSlice"; */
import TodoAddSlice from "../features/TodoAddSlice";

export const store = configureStore({
  reducer: {
    /* count: countReducer */
    todo: TodoAddSlice,
  },
});
