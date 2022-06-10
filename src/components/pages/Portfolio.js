import React from 'react';
import TopComp from '../TopComp';
import ReactPlayer from 'react-player';
import '../pages_CSS/Portfolio.css';
const Portfolio = () => {
  return (
    <>
      <div className="container">
        <TopComp />
        <p className="pages_title tt">Portfolio</p>
        <p className="sub_title">
          Welcome to <b>CYPHEROCK</b> <i class="bi bi-emoji-smile"></i>
        </p>
        <div className="video">
          <ReactPlayer
            controls
            width="580px"
            height="300px"
            url="https://www.youtube.com/watch?v=A3hMD_76f4I"
            className="sss"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
