const store = require("./app/store")
const cakeAction=require("./featutes/cakes/cakeSlice").cakeAction
const icecreamAction = require("./featutes/icecream/icecreamSlice").icecreamAction
const fetch=require('./featutes/async/asyncSlice').fetch
console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(()=>{
})
store.dispatch(fetch())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.restocked(4))
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.restocked(9))

// unsubscribe()