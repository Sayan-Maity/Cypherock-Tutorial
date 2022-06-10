import React from 'react';
import TopComp from '../TopComp';
import BottomComp from '../BottomComp';

const Wallet_2 = () => {
  return (
    <>
      <div className="container">
        <TopComp />
        <p className="wallet_title">Wallet 2</p>
        <BottomComp />
      </div>
    </>
  );
};

export default Wallet_2;
