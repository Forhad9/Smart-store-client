import React from 'react';
import deleteIcon from '../../icons/Group 33150.png';
import editIcon from '../../icons/Group 307.png';
import './ManageSingleProduct.css'

const ManageSingleProduct = (props) => {
    const { _id, product_name, product_wight, product_price } = props.product;
    const handleDeleteProduct = (id) => {
        // eslint-disable-next-line no-restricted-globals
        const deleteConfirm = confirm('Are you sure to delete this product')
        if (deleteConfirm) {
            fetch(`https://blooming-gorge-50916.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        document.getElementById(`${id}`).style.display = "none";
                    }
                })
        }

    }

    return (
        <div id={_id} className="products-item row">
            <p className="col-4">{product_name}</p>
            <p className="col-3">{product_wight}</p>
            <p className="col-3">${product_price}</p>
            <div className="col-2">
                <p className="row">
                    <span className="col-6 manage-icon edit-icon"><img className="" src={editIcon} alt="" /></span>
                    <span onClick={() => handleDeleteProduct(_id)} className="col-6 manage-icon"><img className="" src={deleteIcon} alt="" /></span>
                </p>
            </div>
        </div>
    );
};

export default ManageSingleProduct;