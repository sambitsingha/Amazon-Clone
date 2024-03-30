import React from 'react'
import './Checkout.css'
import Computer from "./Images/Computer.jpeg"
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className='Checkout'>
        <div className='Checkout-left'>
            <img className='checkout-ad' src={Computer} alt=""/>
            <div>
            <h2 className='checkout-title'>
                Your Shopping Cart
            </h2>
            {basket.map(item => (
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}

        </div>
        </div>
        <div className='Checkout-right'>
            <Subtotal />
            
        </div>
        

    </div>
  )
}

export default Checkout