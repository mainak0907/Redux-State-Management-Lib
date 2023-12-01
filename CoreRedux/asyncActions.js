const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const createStore = redux.legacy_createStore
const applyMiddleware= redux.applyMiddleware
const axios=require('axios')
const initialstate = {
    loading: false,
    users: [],
    error: '',
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fethUsersRequested = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fethUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fethUsersfailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: '',
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                Users: [],
                erroe: action.payload
            }
    }
}
const fetchusers=()=>{
    return function (dispatch){
        dispatch(fethUsersRequested())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            const users = response.data.map((user)=> user.id)
            dispatch(fethUsersSuccess(users))
        })
        .catch((error)=>{
            dispatch(fethUsersfailed(error.message))
        })
    }

}
const store= createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchusers())