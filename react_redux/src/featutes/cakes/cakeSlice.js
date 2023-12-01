import { createSlice } from "@reduxjs/toolkit"

const initialState={
    numofcakes: 10,
}

const cakeSlice= createSlice({
    name: 'cake',
    initialState,
    reducers:{
        ordered: (state)=>{
            state.numofcakes--
        },
        restocked: (state, action)=>{
state.numofcakes+=action.payload
        },
    },
})

export default cakeSlice.reducer
export const {ordered,restocked}= cakeSlice.actions
export const cakeAction= cakeSlice.actions