import React from 'react';

import CardOptions from './cardOptions';
import { combineStrings as cs } from '../../../helpers';

import {
  container as containerClass,
  tape as tapeClass,
  card as cardClass,
  cardContent as cardContentClass,
  activeCard as activeCardClass,
} from './stepsTape.module.sass';

const StepsTape = ({ currentStepIndex, steps, goPreviousStep, goNextStep, submit }) => {

  return (
    <div className={containerClass}>
      <ul
        className={tapeClass}
        style={{ left: `-${currentStepIndex}00%` }}
      >
        {
          steps.map((item, index) => {
            const activeClass = currentStepIndex === index ? activeCardClass : null;

            return (
              <li className={cs()(cardClass, activeClass)} key={index}>
                <form>
                  <div className={cardContentClass}>
                    <div>Hello</div>
                  </div>
                  <CardOptions
                    steps={steps}
                    index={index}
                    goPreviousStep={goPreviousStep}
                    goNextStep={goNextStep}
                    submit={submit}
                  />
                </form>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default StepsTape;
