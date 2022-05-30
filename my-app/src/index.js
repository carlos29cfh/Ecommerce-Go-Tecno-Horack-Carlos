import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./CartContext/CartContext";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";

const firebaseConfig = {
  apiKey: "AIzaSyCY8Fu8u6dJ6g5NI48MaBnFAGsr-Fsg28k",
  authDomain: "go-tecno.firebaseapp.com",
  projectId: "go-tecno",
  storageBucket: "go-tecno.appspot.com",
  messagingSenderId: "532030641121",
  appId: "1:532030641121:web:68cda6146296fcc4a4f8a0",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
