import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="appWrapper">
      <div
        className="titleDefault"
        style={{ marginTop: '80px' }}
      >Homepage is here!</div>
      <div
        style={{ textAlign: 'center', fontSize: '30px' }}
      >
        <Link
          to={'checkout'}
          style={{ color: 'inherit' }}
        >To Checkout =></Link>
      </div>
    </div>
  );
};

export default Home;
