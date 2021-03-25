
import { BaseThunkType, InferActionsTypes } from './../redux-store';
import {auth} from '../../api/index'

const initialState = {
    firstName: null as null | string,
    secondName: null as null | string,
    email: null as null | string
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return { ...state, ...action.payload }
        }
        default:
            return state;
    }
}

const actions = {
    setUser: (firstName: string, secondName: string, email: string) => ({ type: 'SET_USER_DATA', payload: { firstName, secondName, email } as const })
}

export const authRegistration = (email: string, password: string, firstName: string, secondName: string): ThunkType => async (dispatch) => {
    await auth.registration(email,password,firstName,secondName)
}


export default authReducer
type ActionTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionTypes>