import { createSlice } from "@reduxjs/toolkit"
import { cakeAction } from "../cakes/cakeSlice"
const initialState = {
    numoficecream: 10,
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numoficecream--
        },
        restocked: (state, action) => {
            state.numoficecream += action.payload
        },
    },
    extraReducers:(builder)=>{  // This accesses the state of another Slice
        builder.addCase(cakeAction.ordered,(state)=>{
            state.numoficecream --
        })
    },
})

export default icecreamSlice.reducer
export const {ordered,restocked} = icecreamSlice.actions
