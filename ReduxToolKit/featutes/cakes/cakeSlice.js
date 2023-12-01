const createSlice = require("@reduxjs/toolkit").createSlice

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

module.exports = cakeSlice.reducer
module.exports.cakeAction = cakeSlice.actions