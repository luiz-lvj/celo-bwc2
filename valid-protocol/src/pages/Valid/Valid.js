import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './validStyle.css';

export default function Valid() {
  const [cellphone, setCellphone] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, such as sending it to a server
    console.log('Cellphone:', cellphone);
    console.log('Name:', name);
    console.log('Company:', company);
    // Reset the form
    setCellphone('');
    setName('');
    setCompany('');
  };

  return (
    <div className="valid_wrapper">
      <Header/>
      <div className="parallax"></div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-title">JOURNALIST INFORMATION</label>
        <button className="connect-button">Connect your wallet</button>
        <label className="form-label">
          Link:
          <input
            className="form-input"
            type="text"
          />
        </label>
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
        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
  );
};