import React from 'react';
import CardValid from '../../components/CardValid/CardValid';
import CardVerifier from '../../components/CardVerifier/CardVerifier';
import Header from '../../components/Header/Header';
import NYClogo from '../../images/Symbol-New-York-Times.png';
import CNNlogo from '../../images/cnn-logo-1-1.png';
import BBClogo from '../../images/bbc-logo-0.png';
import WPlogo from '../../images/washingtonpost_logo_icon_170226.png';
import Validlogo from '../../images/valid_logo_transparent2.png';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function Home() {

  const history = useNavigate();
    
  return (
    <div className='wrapper'>
      <Header/>
      <div className="parallax"></div>
      <div className="tophome">
        <img className="top-img" src={Validlogo} alt="Valid Logo"></img>
        <label className="top-title">Truth deployed by tech.</label>
        <button className="top-button" onClick={() => history("/")}>Connect your wallet</button>
      </div>
      <div className="card-container">
        <div className="container-card-title">
          Who are you?
        </div>
        <div className="card-bar">
          <CardValid onClick={() => history("/")}/>
          <CardVerifier onClick={() => history("/verifier")}/>
        </div>
      </div>
      <div className="media-companies-container">
        <div className="container-title">
          Our trustworthy sources*
        </div>
        <div className="logo-bar">
          <img src={CNNlogo} alt="CNN Logo" className="imgFormat"/>
          <img src={BBClogo} alt="BBC Logo" className="imgFormat"/>
        </div>
        <div className="logo-bar">
          <img src={NYClogo} alt="NYTimes Logo" className="imgFormat"/>
          <img src={WPlogo} alt="Washington Post Logo" className="imgFormat"/>
        </div>
        <div className="note">*Purely fictional for now! Just an MVP abstraction.</div>
      </div>
    </div>
  );
};