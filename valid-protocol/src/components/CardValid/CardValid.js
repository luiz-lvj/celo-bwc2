import React from 'react';
import "./stylesValid.css";
import Avatar from "../../images/avatar_journalist_default_bw.png";
import { useNavigate } from 'react-router-dom';

export default function CardValid() {

  const history = useNavigate();

  return (
    <div onClick={() => history("/")}>
        <div className="flip_card">
            <div className="flip_card_inner">
                <div className="flip_card_front">
                    <img className="img_card" src={Avatar} alt="Avatar"/>
                    <div className="title_card">I'm a journalist </div>
                </div>
                <div className="flip_card_back">
                    <h1 className="card_h1">Click Here</h1>
                    <p className="card_p">If you're a journalist and</p>
                    <p className="card_p">want to send information</p>
                </div>
            </div>
        </div>
    </div>
  );
}