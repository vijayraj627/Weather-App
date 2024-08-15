import { configureStore } from "@reduxjs/toolkit";
import HistorySlice from "./HistorySlice";

const store = configureStore({
    reducer : {
        hist : HistorySlice
    }
})

export default store;