import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../addToCartFunctions/CartContext";

const Home = () => {
  const [products] = useContext(ProductContext);
const cartFunctions = useContext(CartContext)

// const localData = JSON.parse(localStorage.getItem("cartStorage"))

// console.log(localData);


  return (
    <div className="home">
      <h2 className="text-center text-primary my-5">Home</h2>


      <div className="products-list">
        <div className="container">
          <div className="row g-5">
            {products.map((laptop, c) => {
              return(
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card">
                    <img src={laptop.imageCover[0]} className="card-img-top" alt="..." />
                    <div className="card-body">
                        {/* <h5 className="card-title">Card title</h5> */}
                        <p className="card-text text-danger">
                        {laptop.title}
                        </p>
            
                        <p>
                        Price:
                        <span className=" text-success ms-2 my-2">{laptop.price}</span>
                        </p>
                        <button className="btn btn-primary" onClick={()=>cartFunctions.addCartItem(laptop)}>
                        Add To Cart
                        </button>
                    </div>
                    </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
