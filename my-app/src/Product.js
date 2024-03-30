import React from 'react'
import { useStateValue } from "./StateProvider";
import {motion} from  'framer-motion';

import './Product.css'
function Product({id, title, image, price, rating }) {
    const[{basket}, dispatch] = useStateValue();
  console.log("this the cart ", basket);
  const addtoCart = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

  };
  return (
    <div className="product-cont"
     whilehover={{ scale: 1.1, boxShadow: "0px 0px 8px 8px rgb(0,0,0)"}}>
    <div className="product-info">
      <p>{title}</p>
      <p className="product-price">
        <small>₹</small>
        <strong>{price}</strong>
      </p>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>
    </div>
    <img src={image} alt="" />
    <button onClick={addtoCart}>Add to Cart</button>
  </div>
  )
}

export default Product
