// eslint-disable-next-line
import React, { useEffect } from 'react';
import { getHotels } from '../Redux/HotelSlice';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../Components/Layout';
import Hotels from '../Components/Hotels';

const Home = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.entries);
  useEffect(() => {
    dispatch(getHotels());
  }, []);
  if (!hotels)
    return <h1 style={{ textAlign: 'center', color: '#333' }}>LOADING...</h1>;
  return (
    <Layout>
      <main className='home-main'>
        <article className='home-article'>
          <Hotels />
        </article>
      </main>
    </Layout>
  );
};

export default Home;
