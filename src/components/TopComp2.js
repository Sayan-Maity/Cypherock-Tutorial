import React from 'react';
import './pages_CSS/TopComp2.css';

const TopComp = () => {
  return (
    <>
      <div className="topComp">
        <div className="right">
          <div className="synchronize_Box2">
            <li>
              <i class="bi bi-check-circle"></i>
            </li>
            <li>
              <p className="synchronize">Synchronized</p>
            </li>

            <li>
              <i class="bi bi-circle-half"></i>
            </li>
            <li>
              <i class="bi bi-lock"></i>
            </li>
          </div>
          <div className="add_coin">
            <div className="icon">
              <i class="bi bi-plus"></i>
              <p>Add Coin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopComp;
{
  /* <i class="bi bi-plus"></i> */
}
