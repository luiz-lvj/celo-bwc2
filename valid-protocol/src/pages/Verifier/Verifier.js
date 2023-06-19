import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './verifierStyles.css';
import { connectMetamask } from '../../components/connect';
import { ABI } from '../../components/contract';
import { ethers } from 'ethers';

export default function Verifier() {

  const [address, setAddress] = useState('');
  const [signer, setSigner] = useState('');

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const [link, setLink] = useState('');
  async function connect(e){
    e.preventDefault();
    const connection = await connectMetamask();
    if(connection){
      setAddress(connection.address);
      setSigner(connection.web3Signer);
    }
  }

  async function handleSubmit() {
    try{
      setLoadingSubmit(true);

      const connection = await connectMetamask();
      if(!connection){
        alert("You need MEtamask!");
        return;
      }
      const contractAddress = "0xfbb040346936B6AD2110df3419A29f12f6e48C36";

      const contract = new ethers.Contract(contractAddress, ABI, connection.web3Signer);

      const bytes32 = ethers.utils.formatBytes32String(link);

      const isValid = await contract.isValidLink(bytes32);
      if(!isValid){
        alert("This link is not valid!");
        return;
      }

      const journalistAddress = await contract.validLinks(bytes32);
      const name = await contract.sourcesName(journalistAddress);
      const phone = await contract.sourcesPhone(journalistAddress);
      const company = await contract.sourcesCompany(journalistAddress);

      alert(`This link is valid! \n\nJournalist: ${name} \nPhone: ${phone} \nCompany: ${company}`);
      


    } catch(err){
      console.log(err);
    } finally{
      setLoadingSubmit(false);
    }
  }

  function getBeautyAddress(addr){
    return addr.slice(0, 6) + "..." + addr.slice(-4);
  }


  return (
    <div className="valid_wrapper">
      <Header/>
      <div className="parallax"></div>
      <div className="info_wrapper">
        <label className="form-title">CHECK INFORMATION NOW!</label>
        <button className="connect-button" onClick={connect} >{address === "" ? "Connect your wallet" : getBeautyAddress(address) }</button>
        <label className="info-label">
          Write below the piece of text you wish to check if is true or false:
          <input
            className="info-input"
            type="text"
            placeholder="News to be credit-checked"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <br />
        <button 
        onClick={handleSubmit}
        className={`check-button ${loadingSubmit ? "loading" : ""} `} >
          {loadingSubmit ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : "Check"}
        </button>
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