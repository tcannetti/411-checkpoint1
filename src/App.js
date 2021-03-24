import './App.css';
// Material ui import 
import {
  AppBar,
  Typography,
  Toolbar
} from "@material-ui/core"

// Import state function
// import { useState } from 'react'

// Import built components
// import Login from './components/Login'
import Dashboard from './components/Dashboard'


function App() {
  // variable for state
  // const [loginFunc, loginFuncSet]

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6" component="h1">
            Music Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Dashboard />
    </div>
  );
}

export default App;
