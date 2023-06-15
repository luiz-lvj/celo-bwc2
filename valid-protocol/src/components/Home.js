import React from 'react';
import NYClogo from '../images/Symbol-New-York-Times.png';
import CNNlogo from '../images/cnn-logo-1-1.png';
import BBClogo from '../images/bbc-logo-0.png';
import WPlogo from '../images/washingtonpost_logo_icon_170226.png';
import './styles.css';

export default function Home() {
    
  return (
    <div className='Wrapper'>
      <div id="hero">
        <label className="toGreen">Valid</label>
        <label className="green toWhite bold">Protocol</label>
      </div>
      <div id="smallerText">
        <label className="greenHover bold">Truth</label>, deployed by
        <label className="green bold toWhite">tech.</label>
      </div>
      <div className="subBody">
        <div className="textSpace" id="connectBody">
          Connect your <label className="greenHover">Crypto Wallet</label>
          <div><button id="connectWallet" className="button">Connect</button></div>
        </div>
        <div id="textBox">
          <div>
            Write below the piece of text you wish to check if is true or false.
          </div>
          <input
            id="checkText"
            type="text"
            placeholder="     News to be credit-checked"
          />
          <button id="factButton" className="button">Check</button>
          <div id="response"></div>
        </div>
        <div id="struct"></div>
      </div>
      <div className="subBodyTwo">
        <div>
          <div>
            Our <label className="bold" id="trustText">trustworthy</label> sources*
          </div>
          <div id="firstLineCredited" className="lineCredited">
            <img
              src={CNNlogo}
              alt="CNN Logo"
              className="imgFormat"
            />
            <img src={BBClogo} alt="BBC Logo" className="bbcFormat" />
          </div>
        </div>
        <div id="secondLineCredited" className="lineCredited">
          <img
            src={NYClogo}
            alt="NYTimes Logo"
            className="imgFormat reduceToFifteenPercent"
          />
          <img
            src={WPlogo}
            alt="Washington Post Logo"
            className="imgFormat"
          />
        </div>
        <div id="note">*Purely fictional for now! Just an MVP abstraction.</div>
      </div>
      <div id="OwnerSpace"></div>
      <script src="./index.js" type="module"></script>
      <script
        src="https://cdn.plot.ly/plotly-2.20.0.min.js"
        charset="utf-8"
      ></script>
    </div>
  );
};