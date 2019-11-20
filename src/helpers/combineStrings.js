const combineStrings = (delimiter = ' ') => (...strings) => {
  return strings.join(delimiter).trim();
};

export default combineStrings;
