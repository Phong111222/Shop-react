import React, { useState, useEffect } from 'react';

import { Header, Products } from './components';

const App = () => {
  const [NoItems, SetNpItems] = useState(0);
  const [TotalPrice, SetTotalPrice] = useState(0);
  return (
    <div className='App'>
      <Header NoItems={NoItems} TotalPrice={TotalPrice}></Header>
      <Products />
    </div>
  );
};

export default App;
