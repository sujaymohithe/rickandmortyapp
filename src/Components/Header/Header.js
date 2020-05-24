import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div>
        <a href="/" data-test="Logo" className="logo">RICK & MORTY CHARACTERS</a>
      </div>
    </header >
  );
}

export default Header;
