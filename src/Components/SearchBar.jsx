<<<<<<< HEAD
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupToggle } from '../Redux/HotelSlice';
import '../Scss/SearchBar.scss';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.entries);
  return (
    <div className='search'>
=======
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { popupToggle, setTabName, setLocation } from '../Redux/HotelSlice';
import '../Scss/SearchBar.scss';

export const SearchBar = ({ popup }) => {
  const [locations, setLocations] = useState([]);
  const [sort, setSort] = useState({
    location: null,
    guests: null,
  });
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.entries);
  const tabName = useSelector((state) => state.hotels.tabName);
  const location = useSelector((state) => state.hotels.selectedLocation);

  console.log(sort);

  useEffect(() => {
    if (hotels) {
      const uniqueArr = [
        ...new Map(
          hotels.map((data) => [data.fields.city, data.fields])
        ).values(),
      ];
      setLocations(uniqueArr);
    }
  }, [hotels]);

  return (
    <div style={{ display: `${popup ? 'block' : 'none'}` }} className='search'>
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df
      <div className='search-wrapper'>
        <p className='search-text'>Edit your search</p>
        <span
          className='material-icons search-close'
          onClick={() => dispatch(popupToggle())}
        >
          close
        </span>
        <div className='search-tabs'>
<<<<<<< HEAD
          <div className='search-tab'>
            <p className='search-tab-text'>location</p>
            <p className='search-tab-textLight'>Helsinki, Finland</p>
          </div>
          <div className='search-tab search-tab-line'>
=======
          <div
            className='search-tab'
            onClick={() => dispatch(setTabName('location'))}
          >
            <p className='search-tab-text'>location</p>
            <p className='search-tab-textLight'>{sort.location}</p>
          </div>
          <div
            className='search-tab search-tab-line'
            onClick={() => dispatch(setTabName('guest'))}
          >
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df
            <p className='search-tab-text'>Guests</p>
            <p className='search-tab-textLight'>Add guests</p>
          </div>
        </div>
        <div className='search-locations'>
<<<<<<< HEAD
          {hotels &&
            hotels.map((hotel) => (
              <p>{hotel.fields.city + ',' + hotel.fields.country}</p>
            ))}
        </div>
=======
          {hotels && tabName === 'location' ? (
            locations.map((hotel) => (
              <div
                onClick={() => setSort({ ...sort, location: hotel.city })}
                className='search-item'
                key={hotel.id}
              >
                <span className='material-icons search-icon'>room</span>
                <p className='search-item-text'>
                  {hotel.city + ', ' + hotel.country}
                </p>
              </div>
            ))
          ) : (
            <div>HELLO</div>
          )}
        </div>
        <button
          className='search-button'
          onClick={() => {
            dispatch(popupToggle());
            dispatch(setLocation(sort.location));
          }}
        >
          Search
        </button>
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df
      </div>
    </div>
  );
};
