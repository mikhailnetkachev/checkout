import React from 'react';

import FormBuilder from '../../formBuilder';
import { combineStrings as cs } from '../../../helpers';

import {
  container as containerClass,
  tape as tapeClass,
  card as cardClass,
  activeCard as activeCardClass,
  contacts as contactsClass,
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
            const isLastStep = index === steps.length - 1;
            const onSubmit = isLastStep
              ? (data) => { goNextStep(index, data); submit(); }
              : (data) => { goNextStep(index, data) };

            return (
              <li className={cs()(cardClass, activeClass)} key={index}>
                <FormBuilder
                  className={contactsClass}
                  fields={item.fields}
                  onSubmit={onSubmit}
                />
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default StepsTape;
