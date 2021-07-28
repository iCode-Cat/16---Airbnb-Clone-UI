import React from 'react';
import '../Scss/HotelItem.scss';
const HotelItem = ({ superHost, title, rating, type, photo }) => {
  return (
    <div className='hotel'>
      <div
        style={{ backgroundImage: `url(${photo})` }}
        className='hotel-image'
      ></div>
      <div className='hotel-details'>
        {superHost && <div className='hotel-superhost'>SUPER HOST</div>}
        <p className='hotel-type'>{type}</p>
        <div className='hotel-rating'>
          <span className='material-icons hotel-rating-star'>star</span>
          <p className='hotel-rating-number'>{rating}</p>
        </div>
      </div>
      <p className='hotel-title'>{title}</p>
    </div>
  );
};

export default HotelItem;
