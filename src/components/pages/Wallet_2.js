import React from 'react';
import SideMenu2 from '../SideMenu2';
import TopComp from '../TopComp';
import BottomComp from '../BottomComp';

const Wallet_2 = () => {
  return (
    <>
      <SideMenu2 />
      <div className="container">
        <TopComp />
        <p className="wallet_title">Wallet 2</p>
        <BottomComp />
      </div>
    </>
  );
};

export default Wallet_2;
