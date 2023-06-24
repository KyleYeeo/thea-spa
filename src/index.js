import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-eg5ywpjac3iszszx.us.auth0.com"
    clientId="fZtmZsXZdS1hpXhQRcaOHTw0eMR2c0dg"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={ store }>
      <App />
    </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
