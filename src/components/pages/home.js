import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="appWrapper">
      <div>Homepage is here!</div>
      <div><Link to={'checkout'}>To Checkout =></Link></div>
    </div>
  );
};

export default Home;
