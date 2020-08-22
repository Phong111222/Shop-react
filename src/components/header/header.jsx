import React from 'react';
// import logo from '../../images/logo.png';

const Header = ({ NoItems, TotalPrice }) => {
  return (
    <div className='bg-light'>
      <div className='container'>
        <nav className='navbar navbar-light row'>
          <div className='logo'>
            <img src='/images/logo.png' alt='' style={{ width: 250 }} />
          </div>
          <form className='form-inline'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              style={{ width: 400 }}
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
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
      </div>
    </div>
  );
};
export default Header;
