import React, { useEffect, useState } from 'react';
import './pages_CSS/BottomComp2.css';
import bitcoin from '../assets/bitcoin.webp';
import binance from '../assets/binance.png';
import ethereum from '../assets/ethereum.png';
import Modal from './Modal';

const BottomComp = () => {
  // Modal Open
  const [openModal, setOpenModal] = useState(false);
  // Flag to show Dropdown menu
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  // List of dropdown items
  const [itemsList, setItemsList] = useState([
    {
      name: 'A - Z',
      value: 'a-Z',
    },
    {
      name: 'Z - A',
      value: 'z-A',
    },
    {
      name: 'High - Low',
      value: 'high-Low',
    },
    {
      name: 'Low - High',
      value: 'low-High',
    },
  ]);
  // reference/index to user selected element
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  return (
    <>
      <div className="bottomComp">
        <div className="upper_div">
          <div className="total_coin">
            <p>Total Coin - 10</p>
          </div>
          <div className="custom_fake_dropdown">
            <div className="icon">
              <i class="bi bi-funnel"></i>
            </div>
            <p> Year </p>
          </div>
          {/* The custom Dropdown starts here */}
          <div className="custom-dropdown">
            <div
              className={
                'custom-dropdown-selection' +
                (isDropDownVisible ? 'visible' : '')
              }
              onClick={(e) => {
                setIsDropDownVisible(!isDropDownVisible);
              }}
            >
              <i class="bi bi-arrow-down-up"></i>
              {selectedItemIndex != null
                ? itemsList[selectedItemIndex].name
                : 'A - Z'}
            </div>
            {isDropDownVisible ? (
              <div className="items-holder">
                {itemsList.map((item, index) => (
                  <div
                    key={item.value}
                    className="dropdown-item"
                    onClick={(e) => {
                      setSelectedItemIndex(index);
                      setIsDropDownVisible(false);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* The custom Dropdown starts here */}
        </div>
        <div className="lower_div">
          <div className="table_section">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="coin">
                      <div className="image">
                        <img src={bitcoin} alt="bitcoin_img" />
                      </div>
                      <div className="text">
                        <p>Bitcoin</p>
                      </div>
                    </div>
                  </td>
                  <td>BTC0.00256</td>
                  <td>USD 0.5268</td>
                  <td>
                    <div className="transaction">
                      <div
                        onClick={() => setOpenModal(true)}
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </div>
                      <Modal
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                      />
                      <div className="verticalBar"></div>
                      <div className="transaction_btn">
                        <i class="bi bi-arrow-up-right"></i>
                        <p>Send</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin">
                      <div className="image">
                        <img src={ethereum} alt="bitcoin_img" />
                      </div>
                      <div className="text">
                        <p>ETHEREUM</p>
                      </div>
                    </div>
                  </td>
                  <td>ETH0.0025600</td>
                  <td>USD 0.5268</td>
                  <td>
                    <div className="transaction">
                      <div
                        onClick={() => setOpenModal(true)}
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </div>
                      <Modal
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                      />
                      <div className="verticalBar"></div>
                      <div className="transaction_btn">
                        <i class="bi bi-arrow-up-right"></i>
                        <p>Send</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="coin">
                      <div className="image">
                        <img src={binance} alt="bitcoin_img" />
                      </div>
                      <div className="text">
                        <p>BINANCE</p>
                      </div>
                    </div>
                  </td>
                  <td>BNB0.0025600</td>
                  <td>USD 0.5268</td>
                  <td>
                    <div className="transaction">
                      <div
                        onClick={() => setOpenModal(true)}
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </div>
                      <Modal
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                      />
                      <div className="verticalBar"></div>
                      <div className="transaction_btn">
                        <i class="bi bi-arrow-up-right"></i>
                        <p>Send</p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomComp;
