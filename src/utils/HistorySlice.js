import { createSlice } from "@reduxjs/toolkit";

const HistorySlice = createSlice({
    name : 'hist',
    initialState : {
        items : []
    },

    reducers : {
        addItem : (state, action) =>{
            state.items.push(...action.payload)
        }
    }
})

export const {addItem} = HistorySlice.actions;
export default HistorySlice.reducer;