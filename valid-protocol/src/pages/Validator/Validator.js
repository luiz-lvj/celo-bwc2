import React, { useState } from 'react';
import './validStyle.css';
import { useNavigate } from 'react-router-dom';
import { connectMetamask } from '../../components/connect';
import { ethers } from 'ethers';
import { ABI } from '../../components/contract';
import Header from '../../components/Header/Header';

export default function Validator() {

  const history = useNavigate();

  const [link, setLink] = useState('');


  const [address, setAddress] = useState('');
  const [signer, setSigner] = useState('');

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const contractAddress = "0xfbb040346936B6AD2110df3419A29f12f6e48C36";

  async function connect(e){
    e.preventDefault();
    const connection = await connectMetamask();
    if(connection){
      setAddress(connection.address);
      setSigner(connection.web3Signer);
    }
  }

  const handleSubmit = async (e) => {
    try{
      setLoadingSubmit(true);
      e.preventDefault();
      // Do something with the form data, such as sending it to a server

      const connection = await connectMetamask();
      if(!connection){
        alert("Voce precisa da Metamask!");
        return;
      }

      const contract = new ethers.Contract(contractAddress, ABI, connection.web3Signer);

      //turn string to bytes32
      const bytes32 = ethers.utils.formatBytes32String(link);

      const tx = await contract.addLink(bytes32);
      await tx.wait();
      console.log(tx);

      alert("Success!");

      // Reset the form
      history('/home');
    } catch(err){
      console.log(err);
    } finally{
      setLoadingSubmit(false);
    }
  };

  function getBeautyAddress(addr){
    return addr.slice(0, 6) + "..." + addr.slice(-4);
  }

  return (
    <div className="valid_wrapper">
      <Header/>
      <div className="parallax"></div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-title">ADD LINK TO THE NETWORK</label>
        <button 
        onClick={connect}
        className="connect-button">{address === "" ? "Connect your wallet" : getBeautyAddress(address) }</button>
        <br />
        <label className="form-label">
          Link:
          <input
            className="form-input"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </label>
        <br />
        <button className={`form-button ${loadingSubmit ? "loading" : ""} `} type="submit" >
          {loadingSubmit ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : "Submit"}
          </button>
      </form>
    </div>
  );
};