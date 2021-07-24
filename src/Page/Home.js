import React, { useEffect } from 'react';
import { getHotels } from '../Redux/HotelSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  return <div>HOME</div>;
};

export default Home;
