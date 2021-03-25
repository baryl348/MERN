import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/auth/loginPage';
import RegistrationPage from './components/auth/registrationPage';
import NavBar from './components/navBar/navBar';
import Messages from './components/messages/message'
import Mymessages from './components/messages/Mymessage';
// import MessageForm from './components/messages/form-message/form-message';


const App: React.FC = () => {
  return (
    <div>
      <Route path='/Login' render={() => <LoginPage />} />
      <Route path='/Registration' render={() => <RegistrationPage />} />
      <Route path='/' render={() => <NavBar />} />
      <Route path='/' render={() => <Messages />} />
      <Route path='/' render={() => <Mymessages />} />
      {/* <Route path='/' render={() => <MessageForm />} /> */}


    </div>
  )
}

export default App;
