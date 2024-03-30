const express = require('express');
const bodyParser = require('body-parser'); // Middleware for parsing request bodies
const stripe = require('stripe')('your_stripe_secret_key'); // Import the Stripe library and provide your secret key

const app = express();
const port = 3000; // Set the port number

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Route handler for POST requests to /api/payment
app.post('/api/payment', async (req, res) => {
  try {
    const { paymentMethodId } = req.body;

    // Process the payment using the payment method ID
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Amount in cents
      currency: 'usd',
      payment_method: paymentMethodId,
      confirm: true,
    });

    // Send a success response
    res.status(200).json({ message: 'Payment processed successfully' });
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error processing payment:', error);
    res.status(500).json({ error: 'An error occurred while processing the payment' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
