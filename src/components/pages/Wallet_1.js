import React from 'react';
import TopComp from '../TopComp';
import BottomComp from '../BottomComp';

const Wallet_1 = () => {
  return (
    <>
      <div className="container">
        <TopComp />
        <p className="wallet_title">Wallet 1</p>
        <BottomComp />
      </div>
    </>
  );
};

export default Wallet_1;
