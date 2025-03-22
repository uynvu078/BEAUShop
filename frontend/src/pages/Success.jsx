import React from 'react';
import { Link } from 'react-router-dom';
import './css/Success.css';

const Success = () => {
  return (
    <div className="success-container">
      <h1>🎉 Thank you for your order!</h1>
      <p>Your payment was successful. We’re getting your items ready.</p>
      <Link to="/" className="success-btn">Back to Home</Link>
    </div>
  );
};

export default Success;
