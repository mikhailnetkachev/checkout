import React from 'react';

import { combineStrings as cs } from '../../../helpers';

import {
  container as containerClass,
  title as titleClass,
  list as listClass,
  activeItem as activeItemClass,
  itemIcon as itemIconClass
} from './statusBar.module.sass';

const StatusBar = ({ currentStepIndex, steps }) => {
  const title = steps[currentStepIndex].title;

  return (
    <div className={containerClass}>
      <div className={titleClass}>{title}</div>
      <ul className={listClass}>
        {
          steps.map((item, index) => {
            const activeClass = currentStepIndex === index ? activeItemClass : null;

            return (
              <li key={index}>
                <div className={cs()(itemIconClass, activeClass)}>{index + 1}</div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default StatusBar;
