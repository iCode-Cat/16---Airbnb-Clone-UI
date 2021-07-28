import React from 'react';
import Logo from '../logo.png';
import '../Scss/Layout.scss';
import { SearchBar } from './SearchBar';
<<<<<<< HEAD
import { popupToggle } from '../Redux/HotelSlice';
import { useDispatch, useSelector } from 'react-redux';
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const popup = useSelector((state) => state.hotels.popup);
  return (
    <>
      <header className='layout-header'>
        {popup && <SearchBar />}
=======
import { popupToggle, setTabName } from '../Redux/HotelSlice';
import { useDispatch, useSelector } from 'react-redux';
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.hotels);
  return (
    <>
      <header className='layout-header'>
        <SearchBar popup={state.popup} />
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df
        <img src={Logo} alt='logo-windbnb' className='header-logo' />
        <div
          className='header-input-container'
          onClick={() => dispatch(popupToggle())}
        >
<<<<<<< HEAD
          <div className='input-location'>Choose Location</div>
          <div className='input-guests'>Add guests</div>
=======
          <div
            onClick={() => dispatch(setTabName('location'))}
            className='input-location'
          >
            {state.selectedLocation}
          </div>
          <div
            onClick={() => dispatch(setTabName('guest'))}
            className='input-guests'
          >
            Add guests
          </div>
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df
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
