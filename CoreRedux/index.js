const redux = require('redux')
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers= redux.combineReducers
const applyMiddleware= redux.applyMiddleware

//MIDDLEWARE 

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const ORDERED_CAKE = "ORDERED_CAKE"
const CAKE_RESTOCKED= "CAKE_RESTOCKED"
const ORDERED_ICECREAM = "ORDERED_ICECREAM"
const ICECREAM_RESTOCKED= "ICECREAM_RESTOCKED"
// ACTIONS 
function order_cake(){
    return {
      type: ORDERED_CAKE,
      payload: 1,
    }
}

function restock_cake(qnt){
    return{
        type:CAKE_RESTOCKED,
        payload: qnt
    }
}

function order_icecream(){
    return {
      type: ORDERED_ICECREAM,
      payload: 1,
    }
}

function restock_icecream(qnt){
    return{
        type:ICECREAM_RESTOCKED,
        payload: qnt
    }
}

// STATE

const initial_state={
    num_cakes: 10,
    num_orders: 0
}

const initial_cakestate={
    num_cakes: 10,
    num_orders: 0
}

const initial_icecreamstate={
    num_icecream: 20,
    num_orders: 0
}


// REDUCER 

const cake_reducer =(state=initial_cakestate,action)=>{
    switch(action.type){
        case ORDERED_CAKE:
            return{
                ...state,
                num_cakes:state.num_cakes-1,
                num_orders:state.num_orders+1
            }
        case CAKE_RESTOCKED:
            return{
                ...state,
                num_cakes: state.num_cakes + action.payload
            }
        default:
            return state
    }
}

const icecream_reducer =(state=initial_icecreamstate,action)=>{
    switch(action.type){
        case ORDERED_ICECREAM:
            return{
                ...state,
                num_icecream:state.num_icecream-1,
                num_orders:state.num_orders+1
            }
        case ICECREAM_RESTOCKED:
            return{
                ...state,
                num_icecream: state.num_icecream + action.payload
            }
        default:
            return state
    }
}

// STORE
const RootReducer=combineReducers({
    cake: cake_reducer,
    icecream: icecream_reducer
})
const store = createStore(RootReducer,applyMiddleware(logger))
console.log('initial state', store.getState())
 const unsubscribe = store.subscribe(()=>{})

store.dispatch(order_cake())
store.dispatch(order_cake())
store.dispatch(order_cake())
store.dispatch(restock_cake(3))
store.dispatch(order_icecream())
store.dispatch(order_icecream())
store.dispatch(order_icecream())
store.dispatch(restock_icecream(10))
unsubscribe()