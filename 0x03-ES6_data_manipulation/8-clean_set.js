/**
 *
 * @param {Set} set
 * @param {String} startString
 * @returns a string of all the set values that start with startString
 */

const cleanSet = (set, startString) => {
  if (startString === '') {
    return '';
  }
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  const cleanedString = filteredValues.map((value) => value.slice(startString.length)).join('-');
  return cleanedString;
};

export default cleanSet;
