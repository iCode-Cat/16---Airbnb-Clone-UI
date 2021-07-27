import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupToggle } from '../Redux/HotelSlice';
import '../Scss/SearchBar.scss';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.entries);
  return (
    <div className='search'>
      <div className='search-wrapper'>
        <p className='search-text'>Edit your search</p>
        <span
          className='material-icons search-close'
          onClick={() => dispatch(popupToggle())}
        >
          close
        </span>
        <div className='search-tabs'>
          <div className='search-tab'>
            <p className='search-tab-text'>location</p>
            <p className='search-tab-textLight'>Helsinki, Finland</p>
          </div>
          <div className='search-tab search-tab-line'>
            <p className='search-tab-text'>Guests</p>
            <p className='search-tab-textLight'>Add guests</p>
          </div>
        </div>
        <div className='search-locations'>
          {hotels &&
            hotels.map((hotel) => (
              <p>{hotel.fields.city + ',' + hotel.fields.country}</p>
            ))}
        </div>
      </div>
    </div>
  );
};
