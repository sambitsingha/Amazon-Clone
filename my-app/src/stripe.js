// stripe.js

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OpwncSIqwPq4QBpiAw4TgUd0Brp3o4XMPk26uWvyGjVFukH3r5UcP2tUmb2CwHpOejA1dDrgtJs9GcUWl7ktvlG00eYuWVVFM');

export default stripePromise;
