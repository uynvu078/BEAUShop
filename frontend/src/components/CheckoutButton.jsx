import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { ShopContext } from '../context/ShopContext';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutButton = () => {
  const { all_product, cartItems } = useContext(ShopContext);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const cartData = all_product
      .filter((product) => cartItems[product.id] > 0)
      .map((product) => ({
        id: product.id,
        name: product.name,
        image: product.image,
        new_price: product.new_price,
        quantity: cartItems[product.id],
      }));

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/create-checkout-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartData }),
    });

    const data = await response.json();
    if (data.id) {
      stripe.redirectToCheckout({ sessionId: data.id });
    } else {
      alert('Failed to start checkout. Please try again.');
    }
  };

  return (
    <button onClick={handleCheckout} style={{
      marginTop: '20px',
      padding: '12px 30px',
      background: 'linear-gradient(135deg, #C2B6A0, #A89580)',
      color: '#1A1A1A',
      fontWeight: '600',
      fontSize: '16px',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }}>
      Proceed to Checkout
    </button>
  );
};

export default CheckoutButton;
