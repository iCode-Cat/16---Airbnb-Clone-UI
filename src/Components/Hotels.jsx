import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Scss/Hotels.scss';
import HotelItem from './HotelItem';
const Hotels = () => {
  const hotels = useSelector((state) => state.hotels.entries);
  const state = useSelector((state) => state);
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
        <p className='stays'>{hotelsObject && hotels.length}+ stays</p>
      </header>
      <div className='hotels-items'>
        {hotelsObject &&
          hotels
            .filter((hotel) =>
              hotel.fields.city.includes(state.hotels.selectedLocation)
            )
            .map((hotel) => <HotelItem key={hotel.sys.id} {...hotel.fields} />)}
      </div>
    </section>
  );
};

export default Hotels;
