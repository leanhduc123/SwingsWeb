import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { AuthAdminCtx } from '../../context/authAdmin';
import { AdminLogin } from '../auth/AdminLogin';
import { Admin } from './Admin';

export const AdminAuth = () => {
    const [authAdmin, setAuthAdmin] = useState(null);
    const authAdminCtxValue = {
        authAdmin: authAdmin,
        setAuthAdmin: setAuthAdmin,
    };
    return (
        <div>
            <Switch>
                <AuthAdminCtx.Provider value={authAdminCtxValue}>
                    <Route path="/" component={AdminLogin} />
                    <Route path="/home" component={Admin} />
                </AuthAdminCtx.Provider>
            </Switch>
        </div>
    )
}
