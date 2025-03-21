import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {

    const [allproducts, setAllProducts] = useState([]);
    const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

    const fetchInfo = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/allproducts`);
            const data = await response.json();
    
            console.log("Admin Fetched Products:", data);
            setAllProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchInfo();
    },[])

    const remove_product = async (id) => {
        await fetch(`${API_BASE_URL}/removeproduct`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id:id})
        })
        await fetchInfo();
    }

  return (
    <div className='list-product'>
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>New Price</p>
            <p className='listproduct-category'>Category</p>
            <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
            <hr />
            {allproducts.map((product, index)=>{
                return <>
                <div key={index} className="listproduct-format-main listproduct-format">
                    <img src={product.image} alt="" className="listproduct-product-icon" />
                    <p>{product.name}</p>
                    <p className='listproduct-price-old'>${product.old_price}</p>
                    <p className='listproduct-new-price'>${product.new_price}</p>
                    <p className='listproduct-category'>{product.category}</p>
                    <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
                </div>
                <hr />
                </>
            })}
        </div>
    </div>
  )
}

export default ListProduct