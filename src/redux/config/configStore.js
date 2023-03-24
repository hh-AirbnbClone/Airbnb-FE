import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../modules/itemSlice";
import userSlice from "../modules/userSlice";

const store = configureStore({
  reducer: {
    item: itemSlice,
    users: userSlice,
  },
});

export default store;
