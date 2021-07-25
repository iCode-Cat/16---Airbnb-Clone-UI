import React from 'react';
import Logo from '../logo.png';
import '../Scss/Layout.scss';
const Layout = ({ children }) => {
  return (
    <>
      <header className='layout-header'>
        <img src={Logo} alt='logo-windbnb' className='header-logo' />
        <div className='header-input-container'>
          <div className='input-location'>Helsinki, Finland</div>
          <div className='input-guests'>Add guests</div>
          <span className='input-icon material-icons'>search</span>
        </div>
      </header>
      {children}
      <footer className='layout-footer'>
        created by iCodeCat - devChallenges.io
      </footer>
    </>
  );
};

export default Layout;
