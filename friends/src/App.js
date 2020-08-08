import React from 'react';
import './App.css';
import Login from "./components/Login";
import {Link, Route} from 'react-router-dom';
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import AddFriend from "./components/AddFriend";

function App() {
   
  return (
    <div className="App">

      <ul>
          <li>
              <Link to='/login'>Login Page</Link>
          </li>
          <li>
              <Link to='/FriendsList'>Friends List</Link>
          </li>
          <li>
              <Link to='/AddFriend'>Add Friend</Link>
          </li>
      </ul>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/FriendsList' component={FriendsList} />
        <PrivateRoute path='/AddFriend' component={AddFriend} />
       


    </div>
  );
}

export default App;