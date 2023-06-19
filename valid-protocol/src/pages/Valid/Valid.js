import React, { useState } from 'react';
import './validStyle.css';
import { useNavigate } from 'react-router-dom';
import { connectMetamask } from '../../components/connect';
import { ethers } from 'ethers';
import { ABI } from '../../components/contract';


export default function Valid() {

  const history = useNavigate();
  const [cellphone, setCellphone] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

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
      console.log('Cellphone:', cellphone);
      console.log('Name:', name);
      console.log('Company:', company);

      const connection = await connectMetamask();
      if(!connection){
        alert("Voce precisa da Metamask!");
        return;
      }

      const contract = new ethers.Contract(contractAddress, ABI, connection.web3Signer);

      const tx = await contract.addSource(name, cellphone, company);
      await tx.wait();
      console.log(tx);

      // Reset the form
      setCellphone('');
      setName('');
      setCompany('');
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
      <div className="parallax"></div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-title">JOURNALIST INFORMATION</label>
        <button 
        onClick={connect}
        className="connect-button">{address === "" ? "Connect your wallet" : getBeautyAddress(address) }</button>
        <br />
        <label className="form-label">
          Cellphone Number:
          <input
            className="form-input"
            type="text"
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Name:
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="form-label">
          Company:
          <input
            className="form-input"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
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