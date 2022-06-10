import React from 'react';
import './pages_CSS/Modal.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          <div className="topDiv">
            <div className="heading">
              <span>Receive</span>
            </div>
            <div className="close_btn">
              <i onClick={onClose} class="bi bi-x"></i>
            </div>
          </div>
          <div className="middleDiv">
            <div className="col">
              <div className="device">
                <div className="icon">
                  <span>1</span>
                </div>
              </div>
              <div className="line"></div>
              <div className="verification">
                <div className="icon">
                  <span>2</span>
                </div>
              </div>
              <div className="line"></div>
              <div className="receive">
                <div className="icon">
                  <span>3</span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="device">
                <div className="text">
                  <span>Device</span>
                </div>
              </div>
              <div className="line"></div>
              <div className="verification">
                <div className="text">
                  <span>Verification</span>
                </div>
              </div>
              <div className="line"></div>
              <div className="receive">
                <div className="text">
                  <span>Receive</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bottomDiv">
            <div className="description">
              <p>Follow the instruction on device</p>
            </div>
            <div className="first_bar">
              <div className="left">
                <i class="bi bi-arrow-right"></i>
                <p>Select the wallet on device</p>
              </div>

              <i class="bi bi-check2"></i>
            </div>
            <div className="second_bar">
              <div className="left">
                <i class="bi bi-arrow-right"></i>
                <p>Select the Coin on Device</p>
              </div>

              <i class="bi bi-check2"></i>
            </div>
            <div className="third_bar">
              <div className="left">
                <i class="bi bi-arrow-right"></i>
                <p>Tap 1 card of any 4 Cards</p>
              </div>

              <i class="bi bi-check2"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
