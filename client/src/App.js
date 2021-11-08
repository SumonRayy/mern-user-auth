import React from 'react'
import { 
    BrowserRouter, 
    Route, 
    Switch, 
    Redirect 
    } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Welcome from './pages/Welcome'
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
              <Switch>

                <Route path="/" exact>
                    <Redirect to="/login"/>
                </Route>

                <Route path="/login" exact component={Login} />

                <Route path="/register" exact component={Register} />

                <Route path="/homepage" exact component={Welcome} />

              </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
