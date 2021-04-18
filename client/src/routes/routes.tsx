import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import LoginPage from '../components/auth/loginPage'
import RegistrationPage from '../components/auth/registrationPage'
import Messages from '../components/messages/message'
import Mymessages from '../components/messages/Mymessage'
import NavBar from '../components/navBar/navBar'

// interface PropsType {
//     isAuth: boolean
// }

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path='/Main' render={() => <NavBar />} />
                <Route path='/Main' render={() => <Messages />} />
                <Route path='/Main' render={() => <Mymessages />} />
                <Redirect to='/Main' />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path='/Login' exact render={() => <LoginPage />} />
            <Route path='/Registration' render={() => <RegistrationPage />} />
            <Redirect to='/Login' />
        </Switch>
    )
}
