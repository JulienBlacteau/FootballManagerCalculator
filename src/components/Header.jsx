import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import { ReactComponent as Logo } from '../assets/images/logo-fmc.svg';
import userImage from '../assets/images/user.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <Link to="/login">
        <img className="user" src={userImage} alt="User" />
      </Link>
    </header>
  );
};

export default Header;
