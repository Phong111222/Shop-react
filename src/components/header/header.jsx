import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchProduct } from "../../redux/actions/actions";
import "./header.css";
const Header = () => {
  const [input, Setinput] = useState("");
  const { NumberOfProducts, TotalPrice } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    Setinput(e.target.value);
  };
  const handleSearch = (e, str) => {
    e.preventDefault();
    console.log(str);
    dispatch(SearchProduct(str));
  };
  return (
    <React.Fragment>
      {" "}
      <div className="header " style={{ background: "white" }}>
        <div className="container">
          <nav className="navbar navbar-light row">
            <div className="logo">
              <img src="/images/logo.png" alt="" style={{ width: 250 }} />
            </div>
            <form
              className="form-inline"
              onSubmit={(e, str) => handleSearch(e, input)}
            >
              <input
                className="form-control mr-sm-2"
                type="text"
                style={{ width: 400 }}
                value={input}
                onChange={handleChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ marginRight: 45 }}>
                <p>No. of items : {NumberOfProducts}</p>
                <p>Sub total: {TotalPrice}</p>
              </div>
              <div style={{ cursor: "pointer" }}>
                <img
                  className=" "
                  src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                  alt="Cart"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="ListCart">
        <div className="Proceed">PROCEED TO CHECKOUT</div>
      </div>
    </React.Fragment>
  );
};
export default Header;
