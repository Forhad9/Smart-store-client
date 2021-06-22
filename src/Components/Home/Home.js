import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import CircleLoader from "react-spinners/CircleLoader";
import './Home.css';
const Home = () => {
   const [products, setProducts]=useState([])
   const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
        fetch('http://localhost:4500/addProduct')
            .then(res => res.json())
            .then(data =>setProducts(data))
    }, [])
    return (

       <div>
       {
        loading ?
        <div className="loader">
           <CircleLoader 
             color={"#F8090D"}
             loading={loading}
             size={100}
         />

        </div>
        :


        <div className="container  products-container">
        {
            products.map(product => <Product product={product} key={product._id}></Product>)
        }
       
        </div>
        



       }
       
       </div>
         
         
         
        

       
    );
};

export default Home;