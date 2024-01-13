import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./SingleProduct.scss"
const SingleProduct = () => {
    const [singleProduct, setSingleProduct] = useState({})
    const [rate, setRate] = useState({})
    const id = +window.location.href.split("/")[4]
    useEffect(()=> {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=> {
            setSingleProduct({...res.data})
            console.log(res.data);
            setRate({...res.data.rating});
        })
    }, [])
  return (
    <div className='container ms-5'>
        <h1 className='single__title'>About Our Product</h1>
        <div className="single ms-5">
            <div className="single__image">
                <img src={singleProduct.image} className='w-100' alt="products" />
            </div>
            <div className="single__desc">
                <div className="single__card">
                    <h2 className='single__card-title text-center'>{singleProduct.title}</h2>
                    <h5>Category: <span>{singleProduct.category}</span></h5>
                    <h5>Price: ${singleProduct.price}</h5>
                    <h5>{rate.rate} <span className='text-warning fs-5'>&#9733;</span></h5>
                    <h5>Number of sells: {rate.count}</h5>
                    <h5>Product description</h5>
                    <hr />
                    <p>{singleProduct.description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct
