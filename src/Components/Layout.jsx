import React from 'react';
import Logo from '../logo.png';
import '../Scss/Layout.scss';
import { SearchBar } from './SearchBar';
import { popupToggle, setTabName } from '../Redux/HotelSlice';
import { useDispatch, useSelector } from 'react-redux';
const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.hotels);
  return (
    <>
      <header className='layout-header'>
        <SearchBar popup={state.popup} />
        <img src={Logo} alt='logo-windbnb' className='header-logo' />
        <div
          className='header-input-container'
          onClick={() => dispatch(popupToggle())}
        >
          <div
            onClick={() => dispatch(setTabName('location'))}
            className='input-location'
          >
            {!state.selectedLocation
              ? 'Choose location'
              : state.selectedLocation}
          </div>
          <div
            onClick={() => dispatch(setTabName('guest'))}
            className='input-guests'
          >
            {state.guestsReal === 0 ? (
              'Guests'
            ) : (
              <p style={{ color: '#333' }}>Guests: {state.guestsReal}</p>
            )}
          </div>
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
