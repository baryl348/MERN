import { AppState } from "../redux-store";

export const idSelector = (state: AppState) => {
    return state.auth.id
}
export const firstNameSelector = (state: AppState) => {
    return state.auth.firstName
}
export const secondNameSelector = (state: AppState) => {
    return state.auth.secondName
}
export const emailSelector = (state: AppState) => {
    return state.auth.email
}
export const isAuthSelector = (state: AppState) => {
    return state.auth.isAuth
}