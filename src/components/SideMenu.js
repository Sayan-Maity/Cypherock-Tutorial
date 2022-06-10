import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import MenuItem from './MenuItem';
import { NavLink } from 'react-router-dom';

const menuItems = [
  {
    name: 'Wallet',
    exact: true,
    to: '',
    iconClassName: 'bi-wallet2',
    subMenus: [
      { name: 'Wallet 1', to: '/wallet/wallet-1' },
      { name: 'Wallet 2', to: '/wallet/wallet-2' },
      { name: 'Wallet 3', to: '/wallet/wallet-3' },
    ],
  },
  {
    name: 'Last Transaction',
    to: `/last-transaction`,
    iconClassName: 'bi-arrow-left-right',
  },
  {
    name: 'Last Transaction',
    to: `/last-transaction`,
    iconClassName: 'bi-arrow-left-right',
  },
  {
    name: 'Tutorials',
    to: `/tutorials`,
    iconClassName: 'bi-play-btn',
  },
  { name: 'Setting', to: `/setting`, iconClassName: 'bi-wrench' },
];

const SideMenu = (props) => {
  return (
    <>
      <div className="side-menu">
        <NavLink exact to="/" className="top-section">
          <FiExternalLink className="icon_link" />
          <p>Portfolio</p>
        </NavLink>
        <div className="divider"></div>

        <div className="main-menu">
          <ul>
            {menuItems.map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={menuItem.exact}
                to={menuItem.to}
                subMenus={menuItem.subMenus || []}
                iconClassName={menuItem.iconClassName}
              />
            ))}
          </ul>
        </div>

        <div className="button">
          <a href="">Make Beneficiary</a>
        </div>
        <div className="bottom-section">
          <p>Support</p>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
