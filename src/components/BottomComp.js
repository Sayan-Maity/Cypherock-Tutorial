import React, { useState } from 'react';
import './pages_CSS/BottomComp.css';
import { NavLink } from 'react-router-dom';
import bitcoin from '../assets/bitcoin.webp';
import binance from '../assets/binance.png';
import ethereum from '../assets/ethereum.png';

const BottomComp = () => {
  // Flag to show Dropdown menu
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  // List of dropdown items
  const [itemsList, setItemsList] = useState([
    {
      name: 'Amount High - Low',
      value: 'amountLow-High',
    },
    {
      name: 'Amount Low - High',
      value: 'amountHigh-Low',
    },
    {
      name: 'Arrange A - Z',
      value: 'arrangeA-Z',
    },
    {
      name: 'Arrange Z - A',
      value: 'arrangeZ-A',
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
              <i class="bi bi-arrows-collapse"></i>
              {selectedItemIndex != null
                ? itemsList[selectedItemIndex].name
                : 'Amount High - Low'}
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
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Holding</th>
                  <th>Value</th>
                  <th>Price</th>
                  <th>Transaction</th>
                </tr>
              </thead>
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
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </NavLink>
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
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </NavLink>
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
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </NavLink>
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
                        <img src={bitcoin} alt="bitcoin_img" />
                      </div>
                      <div className="text">
                        <p>Bitcoin</p>
                      </div>
                    </div>
                  </td>
                  <td>BTC0.00256</td>
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </NavLink>
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
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </NavLink>
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
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </NavLink>
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
                        <img src={bitcoin} alt="bitcoin_img" />
                      </div>
                      <div className="text">
                        <p>Bitcoin</p>
                      </div>
                    </div>
                  </td>
                  <td>BTC0.00256</td>
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </NavLink>
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
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </NavLink>
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
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Receive</p>
                      </NavLink>
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
                        <img src={bitcoin} alt="bitcoin_img" />
                      </div>
                      <div className="text">
                        <p>Bitcoin</p>
                      </div>
                    </div>
                  </td>
                  <td>BTC0.00256</td>
                  <td>$0.5268</td>
                  <td>1.2586</td>
                  <td>
                    <div className="transaction">
                      <NavLink
                        exact
                        to="/wallet/wallet-1/receive"
                        className="transaction_btn"
                      >
                        <i class="bi bi-arrow-up-right"></i>
                        <p>Receive</p>
                      </NavLink>
                      <div className="verticalBar"></div>
                      <a className="transaction_btn">
                        <i class="bi bi-arrow-down-left"></i>
                        <p>Send</p>
                      </a>
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
