import React from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../../assets/images/logo-fmc.svg'; // Assurez-vous que le chemin est correct

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo className="logo" />
      </div>
    </header>
  );
};

export default Header;
