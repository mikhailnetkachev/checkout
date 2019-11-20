import React from 'react';

import StatusBar from './statusBar';

import {
  container as containerClass
} from './checkoutForm.module.sass';

class CheckoutForm extends React.Component {

  state = {
    currentStepIndex: 1,
    steps: null
  };

  componentDidMount () {
    const steps = [
      { type: 'contacts', title: 'Your contacts' },
      { type: 'contacts', title: 'Your contacts, again' },
      { type: 'contacts', title: 'Your contacts and again' },
    ];

    this.setState({ steps });
  }

  render () {
    const { currentStepIndex, steps } = this.state;

    if (!steps) {
      return (
        <div>In Waiting of Steps ...</div>
      );
    }

    return (
      <div className={containerClass}>
        <StatusBar
          currentStepIndex={currentStepIndex}
          steps={steps}
        />
      </div>
    );
  }
}

export default CheckoutForm;
