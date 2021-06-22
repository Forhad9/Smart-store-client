
import React, { useContext, useEffect, useState } from 'react';
import './Orders.css'
import { UserContext } from '../../App';
import OrdersDetails from '../OrderDetails/OrderDetails';
import { useHistory } from 'react-router-dom';

const Orders = () => {
    const [orderedProducts, setOrderedProducts] = useState([]);
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://blooming-gorge-50916.herokuapp.com/orderedProduct?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderedProducts(data))
    }, [])

    const totalCost = orderedProducts.reduce((total, prd) => total + Number(prd.product_price), 0)

    return (
        <div className="container  orders mb-5">
            <div className="customer-info text-center">
                <h2>Hi, {loggedInUser.name}</h2>
                <h5>Your email: {loggedInUser.email}</h5>
            </div>
            <div className="text-center">
                <h2>Your Ordered Product list in the below</h2>
            </div>
            <div className="products-info">
                <div className="row ordered-product-header">
                    <h4 className="col-4">Product Name</h4>
                    <h4 className="col-3">Weight</h4>
                    <h4 className="col-2">Price</h4>
                    <h4 className="col-3 text-right">Ordered Date</h4>
                </div>
                {
                    orderedProducts.length === 0 &&
                    <div className="text-center m-5">
                        <h1>YOU Have NO Orders</h1>
                    </div>
                }
                {
                    orderedProducts.map(orderedProduct => <OrdersDetails orderedProduct={orderedProduct} key={orderedProduct._id} ></OrdersDetails>)
                }
                {   
                    orderedProducts.length > 0 &&
                    <div className="text-center mt-3">
                        <h2>Your Total Cost: $ {totalCost}</h2>
                    </div>
                }
            </div>
            <div className="text-right shop-more-btn-box">
                <button className="btn my-btn shop-more-btn" onClick={() => history.replace('/home')}>Shop More</button>
            </div>
        </div>
    );
};

export default Orders;
