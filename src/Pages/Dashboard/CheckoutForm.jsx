import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState([""]);
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`
      },
      body: JSON.stringify(price),
    };

    fetch(`${import.meta.env.VITE_API_BASE_URL}/create-payment-intent`, options)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        
      })
    
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      console.log(paymentMethod);
      setCardError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setCardError();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-cyan-300 hover:bg-cyan-400 text-xl font-semibold px-8 my-8"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>

      {cardError && (
        <p className="text-red-500 text-xl font-semibold">{cardError}</p>
      )}
    </div>
  );
};

export default CheckoutForm;
