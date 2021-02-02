import React from 'react';
import { Route } from 'react-router-dom';
import Login from './container/auth-container/login-container';
import Registration from './container/auth-container/registration-container';


const App: React.FC = () => {
  return (
    <div>
      <Route path='/Login' render={() => <Login />} />
      <Route path='/Registration' render={() => <Registration />} />
    </div>
  )
}

export default App;
