import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './verifierStyles.css';

export default function Verifier() {

  return (
    <div className="valid_wrapper">
      <Header/>
      <div className="parallax"></div>
      <div className="info_wrapper">
        <label className="form-title">CHECK INFORMATION NOW!</label>
        <button className="connect-button">Connect your wallet</button>
        <label className="info-label">
          Write below the piece of text you wish to check if is true or false:
          <input
            className="info-input"
            type="text"
            placeholder="News to be credit-checked"
          />
        </label>
        <br />
        <button className="check-button">Check</button>
      </div>
    </div>
  );
};






// import React from 'react';
// import NYClogo from '../../images/Symbol-New-York-Times.png';
// import CNNlogo from '../../images/cnn-logo-1-1.png';
// import BBClogo from '../../images/bbc-logo-0.png';
// import WPlogo from '../../images/washingtonpost_logo_icon_170226.png';
// import './verifierStyles.css';

// export default function Verifier() {
    
//   return (
//     <div className='Wrapper'>
//       <div className="hero">
//         <label className="toGreen">Valid</label>
//         <label className="green toWhite bold">Protocol</label>
//       </div>
//       <div className="smallerText">
//         <label className="greenHover bold">Truth</label>, deployed by
//         <label className="green bold toWhite">tech.</label>
//       </div>
//       <div className="subBody">
//         <div className="textSpace connectBody">
//           Connect your <label className="greenHover">Crypto Wallet</label>
//           <div><button className="button">Connect</button></div>
//         </div>
//         <div className="textBox">
//           <div>
//             Write below the piece of text you wish to check if is true or false.
//           </div>
//           <input
//             className="checkText"
//             type="text"
//             placeholder="     News to be credit-checked"
//           />
//           <button className="button factButton">Check</button>
//           <div className="response"></div>
//         </div>
//         <div className="struct"></div>
//       </div>
//       <div className="subBodyTwo">
//         <div>
//           <div>
//             Our <label className="bold trustText">trustworthy</label> sources*
//           </div>
//           <div className="firstLineCredited lineCredited">
//             <img src={CNNlogo} alt="CNN Logo" className="imgFormat"/>
//             <img src={BBClogo} alt="BBC Logo" className="bbcFormat"/>
//           </div>
//         </div>
//         <div className="secondLineCredited lineCredited">
//           <img src={NYClogo} alt="NYTimes Logo" className="imgFormat reduceToFifteenPercent"/>
//           <img src={WPlogo} alt="Washington Post Logo" className="imgFormat"/>
//         </div>
//         <div className="note">*Purely fictional for now! Just an MVP abstraction.</div>
//       </div>
//       <div className="OwnerSpace"></div>
//       <script src="./index.js" type="module"></script>
//       <script
//         src="https://cdn.plot.ly/plotly-2.20.0.min.js"
//         charset="utf-8"
//       ></script>
//     </div>
//   );
// };