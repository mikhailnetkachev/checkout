import React from 'react';

import { validators } from '../../helpers';

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

  onSubmit = (event) => {
    this.validateForm();

    setTimeout(() => {

      if (this.isFormValid()) {
        const { fields } = this.state;
        const data = fields.map(({ name, value }) => ({ [name]: value }));

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

    console.log(true);
    return true;
  };

  render () {
    const { fields } = this.state;

    if (!fields) {
      return (
        <div>There is no fields to render.</div>
      );
    }

    return (
      <form
        onSubmit={this.onSubmit}
      >
        {
          fields.map((item) => {

            if (item.type === 'text') {
              return (
                <div>
                  <input
                    type="text"
                    data-valid={item.isValid ? 1 : 0}
                    name={item.name}
                    onChange={this.onChange}
                    onBlur={this.onFocusOut}
                  />
                </div>
              );
            }

            if (item.type === 'number') {
              return (
                <input
                  type="number"
                  data-valid={item.isValid ? 1 : 0}
                  name={item.name}
                  onChange={this.onChange}
                  onBlur={this.onFocusOut}
                />
              );
            }

            if (item.type === 'area') {
              return (
                <div>
                  <textarea
                    data-valid={item.isValid ? 1 : 0}
                    name={item.name}
                    onChange={this.onChange}
                    onBlur={this.onFocusOut}
                  />
                </div>
              );
            }
          })
        }
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FormBuilder;
