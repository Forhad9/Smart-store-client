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
import AddProduct from './Components/AddProduct/AddProduct';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Checkout from './Components/Checkout/Checkout';
import Orders from './Components/Orders/Orders';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

//    const handleAddProducts = () => {
//      fetch('https://the-daily-shop-server.herokuapp.com/addProduct', {
//         method: 'POST',
//          headers: { 'Content-Type': 'application/json'},
//          body: JSON.stringify(fakeData)
//     })
//     .then(res => res.json())
//  }

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
      <Route path="/admin">
        <Admin></Admin>
      </Route>
      <Route path="/addProducts/:productId">
       <Checkout></Checkout>
    </Route>
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