import React from 'react';
import '../style/Header.css';
import { ReactComponent as Logo } from '../assets/images/logo-fmc.svg'

const Header = () => {
  return (
    <header className="header">
        <Logo className="logo" />
    </header>
  );
};

export default Header;
