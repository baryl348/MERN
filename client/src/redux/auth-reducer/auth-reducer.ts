import { BaseThunkType, InferActionsTypes } from './../redux-store';
import { auth } from '../../api/index'
import jwt_decode from "jwt-decode";

const initialState = {
    id: null as null | number,
    firstName: null as null | string,
    secondName: null as null | string,
    email: null as null | string,
    isAuth: false as boolean,
    isLoading: false as boolean
}

const authReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return { ...state, ...action.payload }
        }
        case 'SET_LOADING': {
            return { ...state, ...action.payload }
        }
        default:
            return state;
    }
}

const actions = {
    setUser: (id: number, firstName: string, secondName: string, email: string, isAuth: boolean) => ({ type: 'SET_USER_DATA', payload: { id, firstName, secondName, email, isAuth } as const }),
    setLoading: (isLoading: boolean) => ({ type: 'SET_LOADING', payload: { isLoading } } as const)
}

export const authRegistration = (firstName: string, secondName: string, email: string, password: string): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.setLoading(true))
        const data = await auth.registration(firstName, secondName, email, password)
        const token = data.data.user
        window.localStorage.setItem('token', token)
        const decodeToken: decodeTokenType = jwt_decode(token)
        dispatch(actions.setUser(decodeToken.id, decodeToken.firstName, decodeToken.secondName, decodeToken.email, true))
    } catch (error) {
        console.log('error')
    } finally {
        dispatch(actions.setLoading(false))
    }

}

export const authLogin = (email: string, password: string): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.setLoading(true))
        const data = await auth.login(email, password)
        const token = data.user
        window.localStorage.setItem('token', token)
        const decodeToken: decodeTokenType = jwt_decode(token)
        const { id, firstName, secondName } = decodeToken
        dispatch(actions.setUser(id, firstName, secondName, decodeToken.email, true))
    } catch (error) {
        console.log(error)
    } finally {
        dispatch(actions.setLoading(false))
    }
}

export const checkUser = (): ThunkType => async (dispatch) => {
    try {
        const data = await auth.check()
        const token = data.data.user
        window.localStorage.setItem('token', token)
        const decodeToken: decodeTokenType = jwt_decode(token)
        const { id, firstName, secondName, email } = decodeToken
        dispatch(actions.setUser(id, firstName, secondName, email, true))
    } catch (error) {
        console.log(error)
    }
}


export default authReducer
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>
interface decodeTokenType {
    id: number
    firstName: string
    secondName: string
    email: string
    exp: number
    iat: number
}