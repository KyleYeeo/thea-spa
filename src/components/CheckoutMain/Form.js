import { useForm, ValidationError } from '@formspree/react';
import cls from './Form.module.css';

export const ContactForm = ({ setSubmitted, cartItems }) => {
  const [state, handleSubmit] = useForm("xeqwleve");

  if (state.succeeded) {
    return <p className={ cls.afterMessage }>Your data and selected services have been sent!</p>
  }

  return (
    <form onSubmit={handleSubmit} className={ cls.form }>
        <input id="firstName" type="text" name="firstName" placeholder='First name' required />

        <input id="email" type="email" name="email" placeholder='Email' required />
        <ValidationError prefix="Email" field="email" errors={state.errors}/>

        <input id="tel" type="tel" name="tel" placeholder='Phone' required />

        <textarea id="Order" name="Order" value={ cartItems.map(el => {
            return ( 
                'ServiceID: ' +el.id + ', Service title: ' + el.title + ', Quantity: ' + el.quantity
            )}) } hidden readOnly/>
        <ValidationError prefix="Message" field="Order" errors={state.errors}/>

        <button onClick={ () => setSubmitted(true) } className={ cls.btn_submit } type="submit" disabled={state.submitting}>
            SUBMIT
        </button>
    </form>
  );
}