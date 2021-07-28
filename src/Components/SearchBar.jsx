// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  popupToggle,
  setTabName,
  setLocation,
  decrement,
  increment,
  guestRealAmount,
} from '../Redux/HotelSlice';
import '../Scss/SearchBar.scss';

export const SearchBar = ({ popup }) => {
  const [locations, setLocations] = useState([]);
  const [sort, setSort] = useState({
    location: '',
    guests: null,
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.hotels);

  useEffect(() => {
    if (state.entries) {
      const uniqueArr = [
        ...new Map(
          state.entries.map((data) => [data.fields.city, data.fields])
        ).values(),
      ];
      setLocations(uniqueArr);
    }
  }, [state]);

  return (
    <div style={{ display: `${popup ? 'block' : 'none'}` }} className='search'>
      <div className='search-wrapper'>
        <p className='search-text'>Edit your search</p>
        <span
          className='material-icons search-close'
          onClick={() => dispatch(popupToggle())}
        >
          close
        </span>
        <div className='search-tabs'>
          <div
            className='search-tab'
            onClick={() => dispatch(setTabName('location'))}
          >
            <p className='search-tab-text'>location</p>
            <p className='search-tab-textLight'>
              {!sort.location ? 'Choose location' : sort.location}
            </p>
          </div>
          <div
            className='search-tab search-tab-line'
            onClick={() => dispatch(setTabName('guest'))}
          >
            <p className='search-tab-text'>Guests</p>
            <p className='search-tab-textLight'>
              {state.guests === 0 ? 'Add guests' : state.guests}
            </p>
          </div>
        </div>
        <div className='search-locations'>
          {state.entries && state.tabName === 'location' ? (
            locations.map((hotel) => (
              <div
                onClick={() => {
                  setSort({ ...sort, location: hotel.city });
                }}
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
            <div className='search-guest'>
              <p className='search-guest-type'>Adults</p>
              <p className='search-guest-desc'>Ages 13 or above</p>
              <div className='search-guest-counter'>
                <span
                  className='material-icons'
                  onClick={() => dispatch(increment())}
                >
                  add_box
                </span>
                <div className='search-guest-num'>{state.guests}</div>
                <span
                  className='material-icons'
                  onClick={() => dispatch(decrement())}
                >
                  indeterminate_check_box
                </span>
              </div>
            </div>
          )}
        </div>
        <button
          className='search-button'
          onClick={() => {
            dispatch(popupToggle());
            dispatch(setLocation(sort.location));
            dispatch(guestRealAmount(state.guests));
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
