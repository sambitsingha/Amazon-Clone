import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css'; 

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Inside the handleSubmit function in PaymentForm.js

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe || !elements) {
    return;
  }

  const cardElement = elements.getElement(CardElement);

  try {
    // Disable the payment button to prevent multiple submissions
    setPaymentLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentLoading(false); // Re-enable the payment button on error
    } else {
      // Send paymentMethod.id to your server to confirm the payment
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      });

      if (response.ok) {
        // Payment successfully processed on the server-side
        console.log('Payment processed successfully.');
        // Optionally, you can reset the payment form here
      } else {
        // Error processing payment on the server-side
        const responseData = await response.json();
        setPaymentError(responseData.error);
      }

      // Re-enable the payment button after the submission is complete
      setPaymentLoading(false);
    }
  } catch (error) {
    setPaymentError(error.message);
    setPaymentLoading(false); // Re-enable the payment button on error
  }
};




    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      // Disable the payment button to prevent multiple submissions
      setPaymentLoading(true);

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setPaymentError(error.message);
      } else {
        // Send paymentMethod.id to your server to confirm the payment
        console.log(paymentMethod);
        // Clear any previous errors
        setPaymentError(null);
      }
    } catch (error) {
      setPaymentError(error.message);
    } finally {
      // Re-xenable the payment button after the submission is complete
      setPaymentLoading(false);
    }
  };

  return (
    <form className="payment-form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="card-element">Card Information</label>
        <CardElement id="card-element" className="card-element" />
      </div>
      <button type="submit" className="submit-button" disabled={!stripe || paymentLoading}>
        {paymentLoading ? 'Processing...' : 'Pay Now'}
      </button>
      {paymentError && <div className="error-message">{paymentError}</div>}
    </form>
  );
}

export default PaymentForm;
