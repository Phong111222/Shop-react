import React, { useState } from 'react';
import './product.css';
const Product = ({ props }) => {
  const { name, price } = props;
  //  console.log(imgs);
  const [quantity, Setquantity] = useState(0);
  const handleIncrement = () => {
    Setquantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (!quantity) return;
    Setquantity(quantity - 1);
  };
  return (
    <div className='col-lg-3 col-sm-4 col-xs-12 pt-5'>
      <img
        src={`/images/products/${name}.jpg`}
        alt=''
        style={{ width: '100%', height: 225 }}
      />
      <p style={{ textAlign: 'center' }}>{name}</p>
      <div className='quantity'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <button className='substract' onClick={handleDecrement}>
              -
            </button>
            <input
              type='number'
              value={quantity}
              style={{
                width: 40,
                textAlign: 'center',
              }}
            />
            <button className='plus' onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: 20 }}>PRICE: {price}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ width: 200 }} className='badge-primary'>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};
export default Product;
