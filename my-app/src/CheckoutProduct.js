import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'


function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

  const removeFromCart= () => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        id: id,
    })

  }

    return (
    <div className='CheckoutProduct'>
        <img className='CheckoutProduct-img' src={image} alt=''/>
    
    <div className='CheckoutProduct-info'>
        <p className='CheckoutProduct-title'>
            {title}
        </p>
        <p className='CheckoutProduct-price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='CheckoutProduct-rating'>
        {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
    </div>
    </div>
  )
}

export default CheckoutProduct