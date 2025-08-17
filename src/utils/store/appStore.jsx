import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice"
import usersFeed from "../slices/feedSlice"
const appStore = configureStore({
    reducer:{
        user: userReducer,
        feed:usersFeed
    }
});

export default appStore;