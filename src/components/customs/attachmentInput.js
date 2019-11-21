import React from 'react';

import { combineStrings as cs } from '../../helpers';

const AttachmentInput = (props) => {
  const { className, title, count, isValid, ...otherProperties } = props;
  const currentCount = count ? count : 0;

  return (
    <label className={cs()("", className)}>
      <div className="icon">
        <img src="/assets/svg/folderIcon.svg" alt="Folder icon"/>
      </div>
      <div className="title">{title}</div>
      <div className="counter">{currentCount} attached</div>
      <input
        type="file"
        {...otherProperties}
        style={{ display: 'none' }}
      />
    </label>
  );
};

export default AttachmentInput;