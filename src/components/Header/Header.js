import React from 'react';
import './Header.css';
import NASALogo from '../../assets/nasa.png';

const Header = () => {
  return (
    <header className="Header">
      <img className="nasa-logo" alt="NASA logo" src={NASALogo} />
      <h1 className="header-h1">Astronomy Picture of The Day</h1>
    </header>
  )
};

export default Header;
