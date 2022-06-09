import React from 'react';
import './pages_CSS/TopComp.css';

const TopComp = () => {
  return (
    <>
      <div className="topComp">
        <div className="right">
          <div className="synchronize_Box">
            <li>
              <i class="bi bi-check-circle"></i>
            </li>
            <li>
              <p className="synchronize">Synchronized</p>
            </li>
            <li>
              <div className="barVertical"></div>
            </li>
            <li>
              <i class="bi bi-toggle-off"></i>
            </li>
          </div>
          <div className="searchBox">
            <div className="search">
              <div className="search_icon">
                <i class="bi bi-search"></i>
                <input
                  type="text"
                  placeholder="Search Your Coin."
                  className="inputSearch_Box
              "
                />
              </div>
            </div>
            <div className="btn">
              <li className="yyy">
                <i class="bi bi-plus"></i>
                <p className="add">Add</p>
              </li>
              <li>
                <div className="barVertical"></div>
              </li>
              <li className="yyy">
                <i class="bi bi-trash"></i>
                <p className="delete">Delete</p>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopComp;
