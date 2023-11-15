import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ProductContext } from "./context/ProductContext";

const App = () => {
  const [products] = useContext(ProductContext);
  if (products.length !== 0) {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }else{
    return(
        <h2 className="text-center text-danger my-5 py-5">Loading</h2>
    )
  }
};

export default App;
