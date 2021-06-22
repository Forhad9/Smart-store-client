import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Checkout from './Components/Checkout/Checkout';
import Orders from './Components/Orders/Orders';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Header></Header>
    <Switch>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>          
      <PrivateRoute path="/admin">
        <Admin></Admin>
      </PrivateRoute>
      <PrivateRoute path="/addProducts/:productId">
       <Checkout></Checkout>
    </PrivateRoute>
     <PrivateRoute path="/orders">
        <Orders></Orders>
    </PrivateRoute>
      <Route path="/login">
        <Login></Login>
      </Route>
    </Switch>
  </Router>
    </UserContext.Provider>
  );
}

export default App;