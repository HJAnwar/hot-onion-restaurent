import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Lunch from './component/Lunch/Lunch';
import Dinner from './component/Dinner/Dinner';
import Breakfast from './component/Breakfast/Breakfast';
import Login from './component/Login/Login';
import Signin from './component/Signin/Signin';
import Notfound from './component/Notfound/Notfound';
import Delivarydetail from './component/Delivarydetail/Delivarydetail';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Delivary from './component/Delivary/Delivary';

export const UserContext= createContext();
function App() {
  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/Signin'>
            <Signin></Signin>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/delivarydetail'>
            <Delivarydetail></Delivarydetail>
          </PrivateRoute>
          <Route path='/delivary'>
            <Delivary></Delivary>
          </Route>
          <Route path='/lunch'>
            <Lunch></Lunch>
          </Route>
          <Route path='/dinner'>
            <Dinner></Dinner>
          </Route>
          <Route path='/breakfast'>
            <Breakfast></Breakfast>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
