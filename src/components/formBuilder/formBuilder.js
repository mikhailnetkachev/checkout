import React from 'react';

import { AttachmentInput, Input, Textarea } from '../customs';

import {
  combineStrings as cs,
  validators
} from '../../helpers';

class FormBuilder extends React.Component {

  state = {
    fields: null
  };

  componentDidMount () {

    if (this.props.fields) {
      const fields = this.props.fields.map((item) => {
        return {...item, value: '', isValid: false, error: '' };
      });

      this.setState({ fields });
    }
  }

  onChange = ({ target: { name, value } }) => {

    this.setState(({ fields }) => {
      const field = fields.find((item) => item.name === name);
      const updatedField = { ...field, value, isValid: false, error: '' };
      const updatedFields = fields.map((item) => item.name === name ? updatedField : item);

      return { fields: updatedFields };
    });
  };

  onFocusOut = ({ target: { name } }) => {
    this.validateField(name);
  };

  onAttachment = (event) => {
    event.preventDefault();

    const { target: { name }} = event;

    this.setState(({ fields }) => {
      const field = fields.find((item) => item.name === name);
      const updatedField = { ...field, count: field.count ? field.count + 1 : 1 };
      const updatedFields = fields.map((item) => item.name === name ? updatedField : item);

      return { fields: updatedFields };
    });
  };

  onSubmit = (event) => {
    this.validateForm();

    setTimeout(() => {

      if (this.isFormValid()) {
        const data = this.getData();
        this.props.onSubmit(data);
      }
    }, 0);

    event.preventDefault();
  };

  checkValue = (value, checks) => {
    let result = { isValid: true, error: '' };

    if (checks) {
      for (let check of checks) {

        switch (check.title) {
          case 'required':
            result = validators.required(value);
            if (!result.isValid) { return result; }
            break;
          case 'range':
            result = validators.range(value, check);
            if (!result.isValid) { return result; }
            break;
          default:
            return result;
        }
      }
    }

    return result;
  };

  validateField = (name) => {

    this.setState(({ fields }) => {
      const field = fields.find((item) => item.name === name);
      const { isValid, error } = this.checkValue(field.value, field.checks);
      const updatedField = { ...field, isValid, error };
      const updatedFields = fields.map((item) => item.name === name ? updatedField : item);

      return { fields: updatedFields };
    })
  };

  validateForm = () => {
    const { fields } = this.state;

    for (let field of fields) {
      this.validateField(field.name);
    }
  };

  isFormValid = () => {
    const { fields } = this.state;

    for (let field of fields) {

      if (!field.isValid) {
        return false;
      }
    }

    return true;
  };

  getData = () => {
    const { fields } = this.state;
    const cleanedFields = fields.map(({ name, value, count }) => {
      return { [name]: value ? value : count };
    });
    const data = {};

    for (let item of cleanedFields) {
      Object.assign(data, item);
    }

    return data;
  };

  render () {
    const { className } = this.props;
    const { fields } = this.state;

    if (!fields) {
      return (
        <div>There is no fields to render.</div>
      );
    }

    return (
      <form
        className={cs()("formBuilder", className)}
        onSubmit={this.onSubmit}
      >
        <div className="fields">
          {
            fields.map((item) => {

              if (item.type === 'area') {
                return (
                  <Textarea
                    className="textareaDefault"
                    key={item.name}
                    { ...item}
                    onChange={this.onChange}
                    onBlur={this.onFocusOut}
                  />
                );
              }

              if (item.type === 'file') {
                return (
                  <AttachmentInput
                    className="attachmentInputDefault"
                    key={item.name}
                    {...item}
                    onChange={this.onAttachment}
                  />
                );
              }

              return (
                <Input
                  className="inputDefault"
                  key={item.name}
                  { ...item}
                  onChange={this.onChange}
                  onBlur={this.onFocusOut}
                />
              );
            })
          }
        </div>
        <div className="options">
          <button className="buttonDefault" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default FormBuilder;
