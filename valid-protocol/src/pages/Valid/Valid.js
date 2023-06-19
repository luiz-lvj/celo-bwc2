import React, { useState } from 'react';
import Header from '../../components/Header/Header';
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
  

  // async function registerNumber(number) {
  //   try {
  //     const verificationTime = Math.floor(new Date().getTime() / 1000);

  //     const identifier = await getIdentifier(number);
  //     console.log(identifier);

  //     // TODO: lookup list of issuers per phone number.
  //     // This could be a good example to have for potential issuers to learn about this feature.

  //     const { accounts } =
  //       await federatedAttestationsContract.lookupAttestations(identifier, [
  //         issuer.address,
  //       ]);
  //     console.log(accounts);

  //     if (accounts.length == 0) {
  //       const attestationReceipt = await federatedAttestationsContract
  //         .registerAttestationAsIssuer(identifier, address, verificationTime)
  //         .sendAndWaitForReceipt();
  //       console.log("attestation Receipt status:", attestationReceipt.status);
  //       console.log(
  //         `Register Attestation as issuer TX hash: ${network.explorer}/tx/${attestationReceipt.transactionHash}/internal-transactions`
  //       );
  //     } else {
  //       console.log("phone number already registered with this issuer");
  //     }
  //   } catch (error) {
  //     throw `Error registering phone number: ${error}`;
  //   }
  // }

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
      <Header/>
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