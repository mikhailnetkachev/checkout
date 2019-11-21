import React from 'react';

import { combineStrings as cs } from '../../helpers';

const Input = (props) => {
  const { className, title, error, required, isValid, ...otherProperties } = props;
  const requiredClass = required ? 'required' : null;
  const errorClass = error ? 'warned' : null;

  return (
    <label
      className={cs()("customInput", className)}
      data-name="input"
    >
      {
        title ? (
          <div className={cs()("title", requiredClass)}>{title}</div>
        ) : null
      }

      <input
        data-error={error}
        className={cs()('input', errorClass)}
        required={required}
        {...otherProperties}
      />

      {
        error ? (
          <div className="error">{error}</div>
        ) : null
      }
    </label>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
