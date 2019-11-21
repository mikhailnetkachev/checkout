import React from 'react';

import { combineStrings as cs } from '../../helpers';

const Textarea = (props) => {
  const { className, title, error, checks, isValid, ...otherProperties } = props;
  const errorClass = error ? 'warned' : null;
  let requiredClass;

  if (checks) {
    requiredClass = checks.find(({ title }) => title === 'required') ? 'required' : null;
  }

  return (
    <label
      className={cs()("customTextarea", className)}
      data-name="textarea"
    >
      {
        title ? (
          <div className={cs()("title", requiredClass)}>{title}</div>
        ) : null
      }

      <textarea
        className={cs()("textarea", errorClass)}
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
