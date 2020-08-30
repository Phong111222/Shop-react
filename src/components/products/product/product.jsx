import React, { useState } from "react";
import "./product.css";
import { useDispatch } from "react-redux";
import { AddToCart } from "../../../redux/actions/actions";
const Product = ({ name, price }) => {
  const [quantities, Setquantity] = useState(0);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    Setquantity(quantities + 1);
  };
  const handleDecrement = () => {
    if (!quantities) return;
    Setquantity(quantities - 1);
  };
  const handleAddToCart = (e, quantity) => {
    // console.log("price:", e.target.value);
    // console.log("name:", e.target.name);
    // console.log("quantities:", quantity);
    const target = e.target;

    dispatch(AddToCart(target.value, quantity, target.name));
  };
  return (
    <div className="col-lg-3 col-sm-4 col-xs-12 pt-5">
      <img
        src={`/images/products/${name}.jpg`}
        alt=""
        style={{ width: "100%", height: 225 }}
      />
      <p style={{ textAlign: "center" }}>{name}</p>
      <div className="quantity">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <button className="substract" onClick={handleDecrement}>
              -
            </button>
            <input
              type="number"
              value={quantities}
              style={{
                width: 40,
                textAlign: "center",
              }}
              onChange={(handleDecrement, handleIncrement)}
            />
            <button className="plus" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: 20 }}>PRICE: {price}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ width: 200 }}
          className="badge-primary"
          value={price}
          name={name}
          onClick={(e, quantity) => handleAddToCart(e, quantities)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
export default Product;
