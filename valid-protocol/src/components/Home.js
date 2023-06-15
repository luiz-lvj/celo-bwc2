import React from 'react';
import './styles.css';

export default function Home() {
    
  return (
    <div>
      <div id="banner">
        <div id="followMakers" className="icon bold">
          <a href="https://www.makers.build/" target="_blank">Follow Makers!</a>
        </div>
        <div id="gitHub" className="icon bold">
          <a href="https://github.com/LFRezende/Nomad-Protocol" target="_blank">GitHub</a>
        </div>
        <div id="address" className="icon bold">
          <a href="https://goerli.etherscan.io/address/0x8c82b77894f9a1d7bc341af974b545e59428fa67" target="_blank">Transactions</a>
        </div>
      </div>
      <div id="hero">
        <label className="toGreen">Nomad</label>
        <label className="green toWhite bold">Protocol</label>
      </div>
      <div id="smallerText">
        <label className="greenHover bold">Truth</label>, deployed by
        <label className="green bold toWhite">tech.</label>
      </div>
      <div id="developerAdd">
        A blockchain-based software developed by
        <label className="green toWhite bold">
          <a href="https://www.linkedin.com/in/luis-felipe-rezende/" target="_blank">Luis Felipe Rezende</a>
        </label>
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
              src="./images/cnn-logo-1-1.png"
              alt="CNN Logo"
              className="imgFormat"
            />
            <img src="./images/bbc-logo-0.png" alt="BBC Logo" className="bbcFormat" />
          </div>
        </div>
        <div id="secondLineCredited" className="lineCredited">
          <img
            src="./images/Symbol-New-York-Times.png"
            alt="NYTimes Logo"
            className="imgFormat reduceToFifteenPercent"
          />
          <img
            src="./images/washingtonpost_logo_icon_170226.png"
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