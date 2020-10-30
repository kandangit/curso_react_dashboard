import React from 'react';
import './App.css';

// React Router Dom
import { BrowserRouter as Router, 
        Switch, 
        Route,
        Redirect
      } from 'react-router-dom';

// Nuestras Vistas para enrutar (Login y Dashboard)
import Login from './Views/Login';
import Dashboard from './Views/Dashboard';

function App() {

  let loggedIn = true; // La que nos indica si el usuario está o no logueado

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            {loggedIn ? 
              <Redirect from= '/' to='/dashboard' /> 
              : 
              <Redirect from='/' to='/login' />}
        </Route>
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard'>
            {loggedIn ?
              <Dashboard />
              :
              <Redirect from='/dashboard' to='/login' />
            }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
