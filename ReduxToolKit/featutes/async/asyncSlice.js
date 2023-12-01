const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')
const initialState = {
    loading: false,
    users: [],
    error: '',
}
// Generates pending , fullfilled , rejection action types

const fetch = createAsyncThunk('user/fetch', () => {
   return axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            response.data.map((user) => user.id)
        })
})

const asyncSlice = createSlice({
    name:'user',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetch.pending, state=>{
            state.loading=true
        })
        builder.addCase(fetch.fulfilled, (state,action)=>{
            state.loading=false,
            state.users=action.payload,
            state.error=''
        })
        builder.addCase(fetch.rejected, (state,action)=>{
            state.loading=false,
            state.users=[],
            state.error=action.error.message
        })
    }
})

module.exports=asyncSlice.reducer
module.exports.fetch=fetch
