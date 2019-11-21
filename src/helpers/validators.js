const validators = {
  range: (value, { from, to }) => {
    const inRange = value >= from && value <= to;

    if (!inRange) {
      return { isValid: false, error: `Please enter number from ${from} to ${to}` };
    }

    return { isValid: true, error: '' };
  },
  required: (value) => {
    const isEmpty = !value.length;

    if (isEmpty) {
      return { isValid: false, error: 'This field is required' };
    }

    return { isValid: true, error: '' };
  }
};

export default validators;
