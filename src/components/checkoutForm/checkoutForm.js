import React from 'react';

import StatusBar from './statusBar';
import StepsTape from './stepsTape';

import {
  container as containerClass
} from './checkoutForm.module.sass';

class CheckoutForm extends React.Component {

  state = {
    currentStepIndex: 0,
    steps: null,
  };

  componentDidMount () {
    const steps = [
      { type: 'contacts', title: 'Your contacts' },
      { type: 'contacts', title: 'Your contacts, again' },
      { type: 'contacts', title: 'Your contacts and again' },
    ];

    this.setState({ steps });
  }

  decrementStepIndex = () => {
    this.setState(({ currentStepIndex }) => {
      const newValue = currentStepIndex - 1;
      const nextValue = newValue < 0 ? currentStepIndex : newValue;

      return { currentStepIndex: nextValue };
    })
  };

  incrementStepIndex = () => {
    this.setState(({ currentStepIndex, steps }) => {
      const newValue = currentStepIndex + 1;
      const nextValue = newValue < steps.length ? newValue : currentStepIndex;

      return { currentStepIndex: nextValue };
    });
  };

  goPreviousStep = () => {
    this.decrementStepIndex();
  };

  goNextStep = (data) => {
    this.incrementStepIndex();
  };

  submit = () => {
    console.log('Submitted');
  };

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
        <StepsTape
          currentStepIndex={currentStepIndex}
          steps={steps}
          goPreviousStep={this.goPreviousStep}
          goNextStep={this.goNextStep}
          submit={this.submit}
        />
      </div>
    );
  }
}

export default CheckoutForm;
