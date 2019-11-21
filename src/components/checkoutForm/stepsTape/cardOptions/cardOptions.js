import React from 'react';

import {
  container as containerClass
} from './cardOptions.module.sass';

const CardOptions = ({ steps, index, goPreviousStep, goNextStep, getData, submit, isFormValid }) => {
  const goPrevious = () => {
    goPreviousStep();
  };
  const goNext = () => {
    if (isFormValid()) {
      goNextStep(index, getData());
    }
  };
  const complete = () => {
    if (isFormValid()) {
      goNextStep(index, getData());
      submit();
    }
  };
  const isFirstStep = index === 0;
  const isLastStep = index === steps.length - 1;

  return (
    <div className={containerClass}>
      {
        !isFirstStep ? (
          <button
            className="buttonDefault"
            type="button"
            onClick={goPrevious}
          >Previous</button>
        ) : null
      }

      {
        !isLastStep ? (
          <button
            className="buttonDefault"
            type="button"
            onClick={goNext}
          >Next</button>
        ) : (
          <button
            className="buttonDefault"
            type="button"
            onClick={complete}
          >Submit</button>
        )
      }
    </div>
  );
};

export default CardOptions;
