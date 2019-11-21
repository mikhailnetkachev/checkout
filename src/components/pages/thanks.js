import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <div className="appWrapper">
      <h2
        className="titleDefault"
        style={{ marginTop: '80px' }}
      >You can find results in console.</h2>
      <div
        style={{ textAlign: 'center', fontSize: '30px' }}
      >Do it <Link to="/checkout">again</Link>?</div>
    </div>
  );
};

export default Thanks;
