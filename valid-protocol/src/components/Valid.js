import React, { useState } from 'react';
import { connectMetamask } from './connect';
import { ethers } from 'ethers';
import { ABI } from './contract';
import { useNavigate } from 'react-router-dom';



export default function Valid() {

  const history = useNavigate();
  const [cellphone, setCellphone] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const [address, setAddress] = useState('');
  const [signer, setSigner] = useState('');

  const contractAddress = "0xfbb040346936B6AD2110df3419A29f12f6e48C36";
  

// the issuer is the account that is registering the attestation
// async function createSocialConnect(){
//   let ISSUER_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
//   const kit = await newKit("https://alfajores-forno.celo-testnet.org");
//     kit.addAccount(ISSUER_PRIVATE_KEY);
//     const issuerAddress =
//         kit.web3.eth.accounts.privateKeyToAccount(ISSUER_PRIVATE_KEY).address;
//     kit.defaultAccount = issuerAddress;

//     // information provided by user, issuer should confirm they do own the identifier
//     const userPlaintextIdentifier = cellphone;
//     const userAccountAddress = address;

//     // time at which issuer verified the user owns their identifier
//     const attestationVerifiedTime = Date.now();

// }
    

// create alfajores contractKit instance with the issuer private key
    

  async function connect(e){
    e.preventDefault();
    const connection = await connectMetamask();
    if(connection){
      setAddress(connection.address);
      setSigner(connection.web3Signer);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the form data, such as sending it to a server
    console.log('Cellphone:', cellphone);
    console.log('Name:', name);
    console.log('Company:', company);

    const contract = new ethers.Contract(contractAddress, ABI, signer);

    const tx = await contract.addSource(name, cellphone, company);
    await tx.wait();
    console.log(tx);

    // Reset the form
    setCellphone('');
    setName('');
    setCompany('');
    history('/home');
  };

  return (
    <form onSubmit={handleSubmit}>

      <button 
      onClick={connect}
      >Connect Wallet</button>
      <br/>
      <br/>

      <label>
        Cellphone Number:
        <input
          type="text"
          value={cellphone}
          onChange={(e) => setCellphone(e.target.value)}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Company:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};