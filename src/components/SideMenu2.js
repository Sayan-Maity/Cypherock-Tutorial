import React from 'react';
import './pages_CSS/SideMenu2.css';
import { NavLink } from 'react-router-dom';

const SideMenu = (props) => {
  return (
    <>
      <div className="side-menu">
        <div className="top-section">
          <p>Portfolio</p>
        </div>

        <div className="main-menuu">
          <ul>
            <li className="list">
              <a>Wallet</a>
              <ul>
                <li>
                  <a className="wallet_active_color">Wallet 1</a>
                </li>
                <li>
                  <a className="add_wallet">
                    <div className="addWallet_icon">
                      <i class="bi bi-plus"></i>
                    </div>
                    Add Wallet
                  </a>
                </li>
              </ul>
            </li>

            <li className="list">
              <NavLink exact to="/last-transaction">
                Last Transaction
              </NavLink>
            </li>
            <li className="list">
              <NavLink exact to="/tutorials">
                Tutorial
              </NavLink>
            </li>
            <li className="list">
              <NavLink exact to="/setting">
                Setting
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="bottom-sectionn">
          <p>Support</p>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
// {menuItems.map((menuItem, index) => (
//   <MenuItem
//     key={index}
//     name={menuItem.name}
//     to={menuItem.to}
//     subMenu={menuItem.subMenu || []}
//   />
// ))}
{
  /* <ul>
<MenuItem
  name={'Wallet'}
  subMenu={[
    { name: 'Wallet 1' },
    { name: 'Wallet 2' },
    { name: 'Wallet 3' },
  ]}
/>
</ul> */
}
