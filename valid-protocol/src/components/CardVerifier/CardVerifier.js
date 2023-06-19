import React from 'react';
import "./stylesVerifier.css";
import Avatar from "../../images/avatar_default_bw.png";
import { useNavigate } from 'react-router-dom';

export default function CardVerifier() {

  const history = useNavigate();

  return (
    <div onClick={() => history("/verifier")}>
        <div className="v_flip_card">
            <div className="v_flip_card_inner">
                <div className="v_flip_card_front">
                    <img className="v_img_card" src={Avatar} alt="Avatar"/>
                    <div className="v_title_card">I'm a user </div>
                </div>
                <div className="v_flip_card_back">
                    <h1 className="v_card_h1">Click Here</h1>
                    <p className="v_card_p">If you're a user and</p>
                    <p className="v_card_p">want to check information</p>
                </div>
            </div>
        </div>
    </div>
  );
}