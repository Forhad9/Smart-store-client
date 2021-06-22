import React from 'react';
import './OrderDetails.css';

const OrdersDetails = ({orderedProduct}) => {
    const {product_name, product_weight, product_price, ordersDate} = orderedProduct;
    return (
        <div className="row ordered-product-details">
            <p className="col-4">{product_name}</p>
            <p className="col-3">{product_weight}</p>
            <p className="col-2">${product_price}</p>
            <p className="col-3 text-right">{(new Date(ordersDate).toDateString('dd/MM/yyyy'))}</p>
        </div>
    );
};

export default OrdersDetails;