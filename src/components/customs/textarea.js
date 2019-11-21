import React from 'react';

import { combineStrings as cs } from '../../helpers';

const Textarea = (props) => {
  const { className, title, required, error, isValid, ...otherProperties } = props;
  const requiredClass = required ? 'required' : null;
  const errorClass = error ? 'error' : null;

  return (
    <label className={cs()("customTextarea", className)}>
      {
        title ? (
          <div className={cs()("title", requiredClass)}>{title}</div>
        ) : null
      }

      <textarea
        className={cs()("textarea", errorClass)}
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

export default Textarea;
