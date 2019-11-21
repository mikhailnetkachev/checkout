import React from 'react';
import { withRouter } from 'react-router-dom';

import StatusBar from './statusBar';
import StepsTape from './stepsTape';

import {
  container as containerClass
} from './checkoutForm.module.sass';

class CheckoutForm extends React.Component {

  state = {
    currentStepIndex: 0,
    steps: null,
    results: [],
  };

  componentDidMount () {
    const steps = [
      { type: 'contacts', title: 'Your contacts' },
      { type: 'contacts', title: 'Your contacts, again' },
      { type: 'contacts', title: 'And again your contacts' },
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

  goNextStep = (index, data) => {
    this.incrementStepIndex();
    this.setData(index, data);
  };

  setData = (index, data) => {
    this.setState((previousState) => {
      const results = previousState.results.slice();
      results[index] = data;

      return { results };
    });
  };

  submit = () => {
    setTimeout(() => {
      console.log('Total', this.state.results);
    }, 1000);

    this.props.history.push('/');
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

export default withRouter(CheckoutForm);
