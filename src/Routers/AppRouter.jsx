import React, { useContext } from 'react';
import { LoginScreen } from '../Components/Login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

export const AppRouter = () => { 
  const {user} = useContext(AuthContext)

  return (
      <Router>
      <div>
        <Switch>
          <PublicRoute 
            exact 
            path='/login' 
            component={LoginScreen}
            isAuthenticated={user.logged}
          />

          <PrivateRoute
            path='/' 
            component={DashboardRoutes} 
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}
