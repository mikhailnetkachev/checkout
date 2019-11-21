import React from 'react';
import { Link } from 'react-router-dom';

import FormBuilder from '../formBuilder';

const Home = () => {
  const inputs = [
    { name: 'companyName', type: 'text', checks: null },
    { name: 'numberOfPeople', type: 'number', checks: [{ title: 'required' }, { title: 'range', from: 1, to: 99 }] },
    { name: 'businessArea', type: 'text', checks: [{ title: 'required' }] },
    { name: 'description', type: 'area', checks: [{ title: 'required' }] },
  ];

  return (
    <div className="appWrapper">
      <div
        className="titleDefault"
        style={{ marginTop: '80px' }}
      >Homepage is here!</div>
      <div
        style={{ textAlign: 'center', fontSize: '30px' }}
      ><Link to={'checkout'} style={{ color: 'inherit' }}>To Checkout =></Link></div>
      <FormBuilder
        fields={inputs}
        className="testform"
        onSubmit={(data) => console.log('submitted', data)}
      />
    </div>
  );
};

export default Home;
