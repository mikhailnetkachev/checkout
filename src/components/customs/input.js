import React from 'react';

import { combineStrings as cs } from '../../helpers';

const Input = (props) => {
  const { className, title, error, required, isValid, ...otherProperties } = props;
  const withFlag = required ? 'withFlag' : null;
  const withError = error ? 'warn' : null;

  return (
    <label className={cs()("customInput", className)}>
      {
        title ? (
          <div className={cs()("title", withFlag)}>{title}</div>
        ) : null
      }

      <input
        className={cs()('field', withError)}
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
