// Checkout.js

import React from 'react';
import { Link } from 'react-router-dom';
import PaymentForm from './PaymentForm'; 
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from './stripe';

function Checkout() {
  return (
    <div>
      <h2>Checkout:-</h2><br></br>
      <p>Please complete the payment to finalize your order:</p>
      
      {/* Render your PaymentForm component */}

      <Elements stripe={stripePromise}>
      <PaymentForm />
      </Elements>

      {/* Provide a link to return to the main page */}
      <Link to="/">Back to Main Page</Link>
    </div>
  );
}

export default Checkout;








