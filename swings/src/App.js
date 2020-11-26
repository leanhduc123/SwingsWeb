import React from 'react';
import { Route } from 'react-router-dom';
import { AdminLogin } from './screens/auth/AdminLogin';
import { Home } from './screens/home/Home';


function App() {
  return (
    <div>
        <Route path="/admin" component={AdminLogin} exact/>
        {/* <Route path="/" component={Home} exact/>   */}
    </div>
  );
}

export default App;
