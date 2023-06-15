import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
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