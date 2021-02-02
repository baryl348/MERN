import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {  reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
    form:formReducer
})

type RootReducer = typeof rootReducer
export type AppStateType = ReturnType<RootReducer>

const store = createStore(rootReducer,applyMiddleware(thunk))
export default store