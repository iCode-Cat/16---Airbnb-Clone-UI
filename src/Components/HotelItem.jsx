import React from 'react';
import '../Scss/HotelItem.scss';
// city(pin): "Oulu"
// country(pin): "Finland"
// superHost(pin): true
// title(pin): "Cozy woodhouse flat with wooden sauna"
// rating(pin): 5
// maxGuestsNum(pin): 4
// type(pin): "Entire house"
// beds(pin): "null"
// photo(pin): "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"

const HotelItem = ({
  city,
  country,
  superHost,
  title,
  rating,
  maxGuestsNum,
  type,
  beds,
  photo,
}) => {
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
