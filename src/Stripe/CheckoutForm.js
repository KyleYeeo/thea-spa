import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';
import { getCartItems, getCost } from '../components/redux/cartSlice';
import { useAuth0 } from "@auth0/auth0-react";
import cls from './Stripe.module.css';
import axios from '../components/CheckoutMain/axios';
import { ContactForm } from "../components/CheckoutMain/Form";
import Swal from 'sweetalert2';
import 'animate.css';

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cost = useSelector(getCost);
  const { isAuthenticated } = useAuth0();
  const [submitted, setSubmitted] = useState(false);
  const cartItems = useSelector(getCartItems);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "/stripe/charge",
          {
            amount: !isAuthenticated ? (cost*100) : (cost*100)*0.9,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
        
            Swal.fire({
                title: 'Thank you! Payment successful!',
                background: '#b9b4b0',
                confirmButtonColor: 'black',
                confirmButtonText:
                    `<a href="https://thea-spa-jtopolska.vercel.app" style="text-decoration: none; color: white;">Go back</a>`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            }) 
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

 
  return (
    <>
        <ContactForm setSubmitted={ setSubmitted } cartItems={ cartItems } />
        {submitted === false && (
            <p className={ cls.info }>After submitting your details, you will be able to pay</p>
        )}
        <form onSubmit={handleSubmit} className={ cls.form }>
            <CardElement className={ cls.cardElement }/>
            <p>Enter 4242 4242 4242 4242 to test Stripe payment system</p>
            
            <button disabled={ submitted === false } className={ submitted === true ? cls.pay_btn : cls.pay_disabled }>
                PAY {`$${ !isAuthenticated ? cost : cost*0.9 }`}
            </button>        
        </form>
    </>
  );
};
