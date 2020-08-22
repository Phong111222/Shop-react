import React, { useState } from 'react';

import { Header, Products } from './components';

const App = () => {
  const [NoItems, SetNoItems] = useState(0);
  const [TotalPrice, SetTotalPrice] = useState(0);
  const handleAddToCart = () => {
    const count = NoItems + 1;
    SetNoItems(count);
  };
  return (
    <div className='App'>
      <Header NoItems={NoItems} TotalPrice={TotalPrice}></Header>
      <Products />
    </div>
  );
};

export default App;
