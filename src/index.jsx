import React from "react";
import ReactDOM from "react-dom/client";
//  BootStrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//  Sass  // Css
import "./sass/style.scss";
import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./addToCartFunctions/CartContext";
//Components

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
