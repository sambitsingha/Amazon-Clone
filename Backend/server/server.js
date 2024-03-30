// server.js

const express = require('express');
const app = express();
const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');

app.use(express.json());

app.post('/api/payment/confirm', async (req, res) => {
  try {
    const { paymentMethodId, amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: paymentMethodId,
      amount,
      currency,
      confirmation_method: 'manual',
      confirm: true,
    });

    res.status(200).json({ success: true, paymentIntent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Payment failed' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
