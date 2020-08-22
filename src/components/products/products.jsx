import React from 'react';
import Product from './product/product';
import Data from '../../products_data';
import './products.css';
const Products = () => {
  return (
    <div className='bg-light'>
      <div className='container '>
        <div className='row'>
          {Data.map((item) => (
            <Product key={item.name} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
