import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AdminLogin } from './screens/auth/AdminLogin';
import { Home } from './screens/home/Home';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin" component={AdminLogin} />
        <Route path="/" component={Home} /> 
      </Switch>  
    </div>
  );
}

export default App;
