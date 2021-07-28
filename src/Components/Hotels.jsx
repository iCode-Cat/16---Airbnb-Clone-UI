import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../Scss/Hotels.scss';
import HotelItem from './HotelItem';
const Hotels = () => {
  const hotels = useSelector((state) => state.hotels.entries);
<<<<<<< HEAD
=======
  const state = useSelector((state) => state);
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df
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
<<<<<<< HEAD
        <p className='stays'>12+ stays</p>
      </header>
      <div className='hotels-items'>
        {hotelsObject &&
          hotels.map((hotel) => (
            <HotelItem key={hotel.sys.id} {...hotel.fields} />
          ))}
=======
        <p className='stays'>{hotelsObject && hotels.length}+ stays</p>
      </header>
      <div className='hotels-items'>
        {hotelsObject &&
          hotels
            .filter((hotel) =>
              hotel.fields.city.includes(state.hotels.selectedLocation)
            )
            .map((hotel) => <HotelItem key={hotel.sys.id} {...hotel.fields} />)}
>>>>>>> d4b95fa8b8e6331fdd4c95168d5e52561557c9df
      </div>
    </section>
  );
};

export default Hotels;
