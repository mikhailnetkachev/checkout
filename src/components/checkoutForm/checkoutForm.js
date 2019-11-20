import React from 'react';

import {
  container as containerClass
} from './checkoutForm.module.sass';

class CheckoutForm extends React.Component {

  state = {
    currentStepIndex: 0,
    steps: null
  };

  componentDidMount () {
    const steps = [
      { type: 'contacts' },
      { type: 'contacts' },
      { type: 'contacts' },
    ];

    this.setState({ steps });
  }

  render () {
    return (
      <div className={containerClass}>Form</div>
    );
  }
}

export default CheckoutForm;
