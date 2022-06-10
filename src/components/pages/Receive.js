import React from 'react';
import SideMenu2 from '../SideMenu2';
import TopComp2 from '../TopComp2';
import BottomComp2 from '../BottomComp2';

const Receive = () => {
  return (
    <>
      <SideMenu2 />
      <div className="container">
        <TopComp2 />
        <p className="wallet_title">Wallet 1</p>
        <BottomComp2 />
      </div>
    </>
  );
};

export default Receive;
