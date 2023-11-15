import React, { useContext } from "react";
import { CartContext } from "../addToCartFunctions/CartContext";



const Cart = () => {

  const {getQuantity,updateQuantity,addCartItem , cartProducts, totalItemsQuantity ,cartTotalPrice,deleteItem} = useContext(CartContext)
    return (
      <div className="home">

        <ul>
          <li>Count Of Total Items: <span className="text-warning"> {totalItemsQuantity()} </span></li>
          <li>Cart Total Price: <span className="text-warning"> {cartTotalPrice()} </span></li>
        </ul>
        <h2 className="text-center text-primary my-5">Cart</h2>
  
  
        <div className="products-list">
          <div className="container">
            <div className="row g-5">
              {cartProducts.map((item, c) => {
                 const laptop = item.data
                return(
                      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="card">
                      <img src={laptop.imageCover[0]} className="card-img-top" alt="..." />
                      <div className="card-body">
                          {/* <h5 className="card-title">Card title</h5> */}
                          <p className="card-text text-danger">
                          {laptop.title}
                          </p>
              
                          <p className="text-dark">
                          Price:
                          <span className=" text-success ms-2 my-2">{laptop.price}</span>
                          </p>
                          <button className="btn btn-primary" onClick={()=>{
                              addCartItem(laptop);
                            }
                          }>
                          Add To Cart
                          </button>
  
                          <div className="d-block my-2">
                              <button className="btn btn-warning me-1" onClick={
                                  ()=>{
                                      updateQuantity(laptop.id ,item.quantity-1)}
                                  }
                                  >-1</button>
                              <span className="btn btn-dark me-1">{item.quantity}</span>
                              <button className="btn btn-success"  onClick={
                                  ()=>{
                                      updateQuantity(laptop.id ,getQuantity(laptop.id)+1)}
                                  }>+1</button>
                          </div>

                          <div className="d-block">
                            <button className="btn btn-danger" onClick={()=> deleteItem(laptop.id)}>Delete</button>
                          </div>
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
}

export default Cart