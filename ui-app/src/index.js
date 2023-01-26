import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="google-signin-client_id" content="YOUR CLIENT ID" />
    <App />
  </React.StrictMode>
);

