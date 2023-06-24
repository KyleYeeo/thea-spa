import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51MiLipB9GhwdVfnwONpW2gAr9eGnsxIQujAyNmceDTzK4mYeLPcarj5Wd9VggOtcIb6QYH1a0KdN7siJ9QSmUHnF00vFWbDZ7H";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;