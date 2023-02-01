import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: string[] = ["column-1", "column-2", "column-3", "column-4"];

const columnOrderSlice = createSlice({
    name: "column",
    initialState,
    reducers: {
       updateColumnOrder: (state, action) => {
           return action.payload
       },

        removeColumnFromOrder: (state, action) => {
            return state.filter(id => id !== action.payload)
        },
    }
});

const columnOrderReducer = columnOrderSlice.reducer;
export default columnOrderReducer;
export const { updateColumnOrder,removeColumnFromOrder } = columnOrderSlice.actions

