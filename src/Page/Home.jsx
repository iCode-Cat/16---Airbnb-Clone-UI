import React, { useEffect } from 'react';
import { getHotels } from '../Redux/HotelSlice';
import { useDispatch } from 'react-redux';
import Layout from '../Components/Layout';
import Hotels from '../Components/Hotels';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotels());
  }, []);
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
