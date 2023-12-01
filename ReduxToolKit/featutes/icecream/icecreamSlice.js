const createSlice = require("@reduxjs/toolkit").createSlice
const cakeAction=require("../cakes/cakeSlice").cakeAction
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

module.exports = icecreamSlice.reducer
module.exports.icecreamAction = icecreamSlice.actions