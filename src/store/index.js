import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../pages/UserSlice";

const store = configureStore({
    reducer : {user : UserSlice}
})

export default store;