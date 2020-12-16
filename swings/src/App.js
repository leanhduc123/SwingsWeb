import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './screens/home/Home';
import { AuthUserCtx } from "./context/authUser"
import { AdminAuth } from './screens/admin/AdminAuth';


Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key))
}

function App() {
  useEffect(() => {
    Storage.prototype.setObj = function (key, obj) {
      return this.setItem(key, JSON.stringify(obj))
    }
    Storage.prototype.getObj = function (key) {
      return JSON.parse(this.getItem(key))
    }
  }, [])
  const [authUser, setAuthUser] = useState(null);

  const authUserCtxValue = {
    authUser: authUser,
    setAuthUser: setAuthUser,
  };

  return (
    <div>
      <Switch>
        <Route path="/admin" component={AdminAuth} />
        <AuthUserCtx.Provider value={authUserCtxValue}>
          <Route path="/" component={Home} />
        </AuthUserCtx.Provider>
      </Switch>
    </div>
  );
}

export default App;
