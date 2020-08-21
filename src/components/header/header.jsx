import React, { Component } from 'react';
import logo from '../../images/logo.png';

const Header = ({ NoItems, TotalPrice }) => {
  return (
    <nav
      className='navbar navbar-light bg-light'
      style={{ paddingRight: '50px', paddingLeft: '50px' }}
    >
      <div className='logo'>
        <img src={logo} alt='' style={{ width: 250 }} />
      </div>
      <form className='form-inline'>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Search'
          aria-label='Search'
          style={{ width: 400 }}
        />
        <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>
          Search
        </button>
      </form>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: 45 }}>
          <p>No. of items : {NoItems}</p>
          <p>Sub total: {TotalPrice}</p>
        </div>
        <div style={{ cursor: 'pointer' }}>
          <img
            className=' '
            src='https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png'
            alt='Cart'
          />
        </div>
      </div>
    </nav>
  );
};
export default Header;
