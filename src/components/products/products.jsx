import React from "react";
import Product from "./product/product";
import { useSelector } from "react-redux";
import "./products.css";
const Products = () => {
  const { Data } = useSelector((state) => state);
  return (
    <div className="bg-light" style={{ paddingTop: 100 }}>
      <div className="container ">
        <div className="row">
          {(!Data.length && (
            <div>
              <h1>NO ITEM WAS FOUND</h1>
            </div>
          )) ||
            Data.map((item) => (
              <Product key={item.name} name={item.name} price={item.price} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
