import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthSelector } from './redux/selectors/auth-selector';
import { useRoutes } from './routes/routes';



const App: React.FC = () => {
  const isAuth = useSelector(isAuthSelector)
  const routes = useRoutes(isAuth)
  return (
    <div>
      {routes}
    </div>
  )
}

export default App;
