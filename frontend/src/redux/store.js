import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
<<<<<<< HEAD
const store = configureStore({
  reducer:{
    auth:authSlice,
=======
import jobSlice from "./jobSlice";
const store = configureStore({
  reducer:{
    auth:authSlice,
    job:jobSlice
>>>>>>> 8da8c88 (16/08/25)
  }
});
export default store;