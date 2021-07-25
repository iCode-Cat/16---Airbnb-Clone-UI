import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Scss/Hotels.scss';
import HotelItem from './HotelItem';
const Hotels = () => {
  const hotels = useSelector((state) => state.hotels.entries);
  const [hotelsObject, setHotelsObject] = useState(false);

  useEffect(() => {
    if (hotels !== null) {
      setHotelsObject(hotels);
    }
  }, [hotels]);

  return (
    <section className='hotels'>
      <header className='hotels-header'>
        <p>Stays in Finland</p>
        <p className='stays'>12+ stays</p>
      </header>
      <div className='hotels-items'>
        {hotelsObject &&
          hotels.map((hotel) => (
            <HotelItem key={hotel.sys.id} {...hotel.fields} />
          ))}
      </div>
    </section>
  );
};

export default Hotels;
