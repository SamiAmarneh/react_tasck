import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const [product,setProduct] = useState({});
    const {prodId} = useParams();
    const getProduct = async()=>{
        const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${prodId}`);
        const data = await response.json();
        setProduct(data.recipe); 
    }
    useEffect(()=>{
        getProduct();
    },[])
  return (
    <div>
        <h2>{product.title}</h2>
    </div>
 
  )
}
