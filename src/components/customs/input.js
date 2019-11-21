import React from 'react';

import { combineStrings as cs } from '../../helpers';

const Input = (props) => {
  const { className, title, error, checks, isValid, ...otherProperties } = props;
  const errorClass = error ? 'warned' : null;
  let requiredClass;

  if (checks) {
    requiredClass = checks.find(({ title }) => title === 'required') ? 'required' : null;
  }

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
