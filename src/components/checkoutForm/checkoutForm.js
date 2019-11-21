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
    const item = {
      type: 'contacts', title: 'Your contacts',
      fields: [
        { name: 'companyName', type: 'text', checks: null, title: 'Your company name' },
        { name: 'numberOfPeople', type: 'number', checks: [{ title: 'required' }, { title: 'range', from: 1, to: 99 }], title: 'Number of people' },
        { name: 'businessArea', type: 'text', checks: [{ title: 'required' }], title: 'Business area' },
        { name: 'description', type: 'area', checks: [{ title: 'required' }], title: 'Description' },
      ]
    };
    const steps = [item, item, item];

    this.setState({ steps });
  }

  incrementStepIndex = () => {
    this.setState(({ currentStepIndex, steps }) => {
      const newValue = currentStepIndex + 1;
      const nextValue = newValue < steps.length ? newValue : currentStepIndex;

      return { currentStepIndex: nextValue };
    });
  };

  goNextStep = (index, data) => {
    this.setData(index, data);
    this.incrementStepIndex();
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
      this.props.history.push('/thanks');
    }, 0);
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
