import React from "react";
// import PaymentGeteway from '../../components/Dashboard/PaymentGeteway';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {

    const location = useLocation();
  const recievedValue = parseFloat(location?.state?.price).toFixed(2);
  const totalPrice = parseFloat(recievedValue)

  return (
    <div className="w-96">
      <h1 className="text-4xl font-semibold my-12">Payment Gateway</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={totalPrice} />
      </Elements>
    </div>
  );
};

export default Payment;
