const configureStore = require("@reduxjs/toolkit").configureStore
const cakereducer = require("../featutes/cakes/cakeSlice")
const icecreamreducer=require("../featutes/icecream/icecreamSlice")
const userReducer = require('../featutes/async/asyncSlice')
const reduxLogger = require("redux-logger")

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer:{
        cake:cakereducer,
        icecream: icecreamreducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(logger),
})

module.exports=store