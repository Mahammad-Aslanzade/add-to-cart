import React, { useContext } from "react";
import { CartContext } from "../addToCartFunctions/CartContext";

const SingleCard = ({ data }) => {
    


const cartFunctions = useContext(CartContext)

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img src={data.imageCover[0]} className="card-img-top" alt="..." />
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
          <p className="card-text text-danger">
            {data.title}
          </p>

          <p className="text-dark">
            Price:
          <span className=" text-success ms-2 my-2">{data.price}</span>
          </p>
          <button className="btn btn-primary" onClick={cartFunctions.addCartItem(data)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
