import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
})

type RootReducer = typeof rootReducer
export type AppStateType = ReturnType<RootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store