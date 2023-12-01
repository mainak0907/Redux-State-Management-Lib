import { configureStore } from "@reduxjs/toolkit"
import cakereducer from "../featutes/cakes/cakeSlice"
import icecreamreducer from "../featutes/icecream/icecreamSlice"
import userReducer from '../featutes/async/asyncSlice'
import { createLogger } from "redux-logger"

const logger = createLogger()

const store = configureStore({
    reducer:{
        cake:cakereducer,
        icecream: icecreamreducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(logger),
})

export default store