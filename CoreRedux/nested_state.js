const redux = require('redux')
const produce=require('immer').produce
const STREET_CHANGED= "STREET_CHANGED"
const createStore = redux.legacy_createStore
// INITIAL STATE
const initialstate={
    name: "Mainak",
    address: {
        street: "123 main street",
        city: "Kolkata",
        pincode: "700079"
    }
}

// ACTION

function change_street(street){
    return{
        type:STREET_CHANGED,
        payload: street
    }
}

// REDUCER 

const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case STREET_CHANGED:
            return(
                produce(state,(draft)=>{
                    draft.address.street=action.payload
                })
            )
        default:
            return state
    }
}

//STORE

const store = createStore(reducer)
console.log('initial state', store.getState())

const unsubscribe = store.subscribe(()=>console.log('Updated State', store.getState()))

store.dispatch(change_street("6879 Main Ali Street"))

unsubscribe()

