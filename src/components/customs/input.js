import React from 'react';

import { combineStrings as cs } from '../../helpers';

const Input = (props) => {
  const { className, title, error, required, ...otherProperties } = props;
  const withFlag = required ? 'withFlag' : null;
  const withError = error ? 'warn' : null;

  return (
    <label className={className}>
      {
        title ? (
          <div className={cs()("title", withFlag)}>{title}</div>
        ) : null
      }

      <input
        required={required}
        className={cs()('field', withError)}
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
