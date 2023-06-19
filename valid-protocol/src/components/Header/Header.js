import React from "react";
import styled from "styled-components";
import icon from "../../images/valid_logo_transparent.png";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

const Header = (props) => {

  const history = useNavigate();

  return (
    <Box>
      <LogoIMGStyle src={icon} alt="" onClick={() => history("/home")}/>
      <MenuStyle>
        <ButtonStyle1 onClick={() => history("/")}>Send link</ButtonStyle1>
        <ButtonStyle1 onClick={() => history("/verifier")}>Check information</ButtonStyle1>
        <ButtonStyle onClick={() => history("/")}>
          Connect your wallet
        </ButtonStyle>
      </MenuStyle>
    </Box>
  );
};

export default Header;

export const Box = styled.div`
    position: fixed;
    display: fixed;
    justify-content: center;
    top: 0;
    right: 0 !important;
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #ffffff;
    min-width: 100px;
    background: rgb(58, 58, 58, 0.8);
    flex-direction: row;
    bottom: 0;
    padding-left: 10%;
    padding-right: 7%;
    z-index: 1;
`;

const LogoIMGStyle = styled.img`
    position: fixed;
    left: 5%;
    margin-top: 12px;
    height: 36px;
    &:hover {
        cursor: pointer;
    }
`;

const MenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 25%;
    height: 80px;
    width: 70%;
`;

const ButtonStyle = styled.button`
    white-space: nowrap;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 40px;
    background: #4adf86;
    border: 50px;
    border-radius: 500px;
    font-size: 16px;
    font-weight: 600;
    line-height: 60px;
    vertical-align: middle;
    color: #ffffff;
    letter-spacing: 1pt;
    transition: 0.6s;
    &:hover {
        color: #4adf86;
        background: #3a3a3a;
        transition: 0.6s;
        cursor: pointer;
    }
    &:focus {
        background: #ffffff;
        color: #4adf86;
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
        0.1s padding ease-in-out;
    }
`;

const ButtonStyle1 = styled.button`
    margin-top: 7.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 45px;
    margin-right: 10%;
    background: transparent;
    border: 50px;
    border-radius: 500px;
    font-size: 16px;
    font-weight: 600;
    line-height: 60px;
    vertical-align: middle;
    color: #ffffff;
    letter-spacing: 1pt;
    &:hover {
        color: #4adf86;
        transition: 0.3s;
        cursor: pointer;
    }
    &:focus {
        border: 0px;
        transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
        0.1s padding ease-in-out;
    }
`;