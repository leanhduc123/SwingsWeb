import React, {useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import { AdminLogin } from './screens/auth/AdminLogin';
import { Home } from './screens/home/Home';
import { Admin } from './screens/admin/Admin';

Storage.prototype.setObj = function(key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
  return JSON.parse(this.getItem(key))
}

function App() {
  useEffect(() => {
  Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
  }
  Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
  }
  },[])

  return (
    <div>
      <Switch>
        <Route path="/admin" component={AdminLogin} />
        <Route path="/admin-home" component={Admin} />
        <Route path="/" component={Home} /> 
      </Switch>  
    </div>
  );
}

export default App;
