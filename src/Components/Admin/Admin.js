import React from 'react';
import './Admin.css';
import GridIcon from '../../icons/grid 1.png';
import PlusIcon from '../../icons/plus 1.png';
import EditIcon from '../../icons/edit 1.png';
import AddProduct from '../AddProduct/AddProduct';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ManageProduct from '../ManageProduct/ManageProduct';


const Admin = () => {


    return (
        <div className="container ">
            <Router>
                <div className="admin-container">
                    <div className="side-nav">
                        <Link className="side-nav-link brand-logo" to="/admin/">The Daily Shop</Link>
                        <Link className="side-nav-link" to="/admin/manage-product"><img className="icon" src={GridIcon} alt="GridIcon" /> Manage Product</Link>
                        <Link className="side-nav-link" to="/admin/add-product"><img className="icon" src={PlusIcon} alt="PlusIcon" /> Add Product</Link>
                        <p className="side-nav-link"><img className="icon" src={EditIcon} alt="EditIcon" /> Edit Product</p>
                    </div>
                    <div className="admin-item">
                        <Switch>
                            <Route path="/admin/manage-product">
                             <ManageProduct></ManageProduct>
                            </Route>
                            <Route exact path="/admin/">
                            <ManageProduct></ManageProduct>
                            </Route>
                            <Route path="/admin/add-product">
                               <AddProduct></AddProduct>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Admin;