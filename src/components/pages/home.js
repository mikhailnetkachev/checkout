import React from 'react';
import { Link } from 'react-router-dom';

import FormBuilder from '../formBuilder';

const Home = () => {
  const inputs = [
    { name: 'companyName', type: 'text', checks: null, title: 'Your company name' },
    { name: 'numberOfPeople', type: 'number', checks: [{ title: 'required' }, { title: 'range', from: 1, to: 99 }], title: 'Number of people' },
    { name: 'businessArea', type: 'text', checks: [{ title: 'required' }], title: 'Business area' },
    { name: 'description', type: 'area', checks: [{ title: 'required' }], title: 'Description' },
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
