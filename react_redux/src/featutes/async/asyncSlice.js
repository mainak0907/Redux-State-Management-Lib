import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    loading: false,
    users: [],
    error: '',
}
// Generates pending , fullfilled , rejection action types

const fetch = createAsyncThunk('user/fetch', () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.data)
})

const asyncSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetch.pending, state => {
            state.loading = true
        })
        builder.addCase(fetch.fulfilled, (state, action) => {
            state.loading = false,
            state.users = action.payload,
            state.error = ''
        })
        builder.addCase(fetch.rejected, (state, action) => {
            state.loading = false,
                state.users = [],
                state.error = action.error.message
        })
    }
})

export default asyncSlice.reducer
const _fetch = fetch
export { _fetch as fetch }
