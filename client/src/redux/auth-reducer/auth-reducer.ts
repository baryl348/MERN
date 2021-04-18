
import { BaseThunkType, InferActionsTypes } from './../redux-store';
import { auth } from '../../api/index'

const initialState = {
    firstName: null as null | string,
    secondName: null as null | string,
    email: null as null | string,
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
    setUser: (firstName: string, secondName: string, email: string, isAuth: boolean) => ({ type: 'SET_USER_DATA', payload: { firstName, secondName, email, isAuth } as const }),
    setLoading: (isLoading: boolean) => ({ type: 'SET_LOADING', payload: { isLoading } } as const)
}

export const authRegistration = (firstName: string, secondName: string, email: string, password: string): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.setLoading(true))
        await auth.registration(firstName, secondName, email, password)
        dispatch(actions.setUser(firstName, secondName, email, false))
    } catch (error) {
        console.log('error')
    } finally {
        dispatch(actions.setLoading(false))
    }

}

export const authLogin = (email: string, password: string): ThunkType => async (dispatch) => {
    try {
        dispatch(actions.setLoading(true))
        await auth.login(email, password)
    } catch (error) {
        console.log(error)
    } finally {

    }
}


export default authReducer
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>