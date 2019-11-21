import React from 'react';

import CardOptions from '../cardOptions';
import { Input } from '../../../customs';
import { combineStrings as cs } from '../../../../helpers';

import {
  container as containerClass,
  fields as fieldsClass,
} from './contacts.module.sass';

class Contacts extends React.Component {

  state = {
    companyName: { value: '', error: '', isValid: true },
    numberOfPeople: { value: '', error: '', isValid: false },
    businessArea: { value: '', error: '', isValid: false },
    description: { value: '', error: '', isValid: false },
  };

  onFieldChange = ({ target: { name, value } }) => {
    this.setState({ [name]: { value, error: '', isValid: false} });
  };

  onFocusOut = ({ target: { name, value } }) => {
    this.checkFieldValidation(name, value);
  };

  checkFieldValidation = ( name, value ) => {
    let error = '';
    let isValid = false;

    switch (name) {
      case 'companyName':
        isValid = true;
        error = isValid ? '' : null;
        break;
      case 'numberOfPeople':
        if (!!value.length) {
          if (+value <= 99 && +value >= 1) {
            isValid = true;
            error = '';
          } else {
            isValid = false;
            error = 'Please enter number from 1 to 99';
          }
        } else {
          isValid = false;
          error = 'This field in required';
        }
        break;
      case 'businessArea':
        isValid = !!value.length;
        error = isValid ? '' : 'This field in required';
        break;
      case 'description':
        isValid = !!value.length;
        error = isValid ? '' : 'This field in required';
        break;
      default:
        isValid = true;
        error = '';
    }

    this.setState((previousState) => {
      return { [name]: {...previousState[name], error, isValid } };
    });

    return isValid;
  };

  isFormValid = () => {
    let isFormValidate = true;

    for (let key in this.state) {
      const field = this.state[key];
      const isFieldValid = this.checkFieldValidation(key, field.value);

      if (!isFieldValid) {
        isFormValidate = false;
      }
    }

    return isFormValidate;
  };

  getData = () => {
    let data = {};

    for (let key in this.state) {
      data[key] = this.state[key].value;
    }

    return data;
  };

  render () {
    const { steps, index, goPreviousStep, goNextStep, submit } = this.props;
    const { companyName, numberOfPeople, businessArea, description } = this.state;

    return (
      <form className={containerClass}>
        <div className={fieldsClass}>
          <Input
            className="labelDefault"
            title="Your company name"
            name="companyName"
            error={companyName.error}
            value={companyName.value}
            onChange={this.onFieldChange}
            onBlur={this.onFocusOut}
          />
          <Input
            className="labelDefault"
            title="Number of people"
            required={true}
            name="numberOfPeople"
            error={numberOfPeople.error}
            value={numberOfPeople.value}
            onChange={this.onFieldChange}
            onBlur={this.onFocusOut}
          />
          <Input
            className="labelDefault"
            title="Business area"
            required={true}
            name="businessArea"
            error={businessArea.error}
            value={businessArea.value}
            onChange={this.onFieldChange}
            onBlur={this.onFocusOut}
          />

          <label className="labelDefault">
            <div className="title withFlag">Description</div>
            <textarea
              className={cs()('area', description.error ? 'warn' : null )}
              name="description"
              maxLength={600}
              required={true}
              value={description.value}
              onChange={this.onFieldChange}
              onBlur={this.onFocusOut}
            />
            <div className="error">{description.error}</div>
          </label>
        </div>
        <CardOptions
          steps={steps}
          index={index}
          goPreviousStep={goPreviousStep}
          goNextStep={goNextStep}
          submit={submit}
          getData={this.getData}
          isFormValid={this.isFormValid}
        />
      </form>
    );
  }
}

export default Contacts;
