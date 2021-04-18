import React from 'react';
import { useRoutes } from './routes/routes';



const App: React.FC = () => {
  const routes = useRoutes(false)
  return (
    <div>
      {routes}

    </div>
  )
}

export default App;
