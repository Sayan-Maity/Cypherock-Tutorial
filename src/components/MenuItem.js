import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, to, exact } = props;
  const [expand, setExpand] = useState(false);
  return (
    <>
      <li>
        <NavLink
          exact
          to={to}
          onClick={() => setExpand(!expand)}
          className="menu-item"
        >
          <div className="nav_icon">
            <i class={iconClassName}></i>
          </div>

          {name}
        </NavLink>
        {subMenus && subMenus.length > 0 ? (
          <ul className={`sub-menu ${expand ? 'active' : ''}`}>
            {subMenus.map((menu, index) => (
              <li key={index} className="sub-menu-li">
                <NavLink exact to={menu.to}>
                  {menu.name}
                  <span>...</span>{' '}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="divider"></div>
      </li>
    </>
  );
};

export default MenuItem;
