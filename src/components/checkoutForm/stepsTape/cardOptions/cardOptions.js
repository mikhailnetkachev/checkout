import React from 'react';

import {
  container as containerClass
} from './cardOptions.module.sass';

const CardOptions = ({ steps, index, goPreviousStep, goNextStep, submit }) => {
  const isFirstStep = index === 0;
  const isLastStep = index === steps.length - 1;

  return (
    <div className={containerClass}>
      {
        !isFirstStep ? (
          <button
            className="buttonDefault"
            type="button"
            onClick={goPreviousStep}
          >Previous</button>
        ) : null
      }

      {
        !isLastStep ? (
          <button
            className="buttonDefault"
            type="button"
            onClick={goNextStep}
          >Next</button>
        ) : (
          <button
            className="buttonDefault"
            type="button"
            onClick={submit}
          >Submit</button>
        )
      }
    </div>
  );
};

export default CardOptions;
