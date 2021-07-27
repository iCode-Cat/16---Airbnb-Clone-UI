import React from 'react';
import Logo from '../logo.png';
import '../Scss/Layout.scss';
import { SearchBar } from './SearchBar';
import { popupToggle } from '../Redux/HotelSlice';
import { useDispatch, useSelector } from 'react-redux';
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.hotels.popup);
  return (
    <>
      <header className='layout-header'>
        {popup && <SearchBar />}
        <img src={Logo} alt='logo-windbnb' className='header-logo' />
        <div
          className='header-input-container'
          onClick={() => dispatch(popupToggle())}
        >
          <div className='input-location'>Choose Location</div>
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
