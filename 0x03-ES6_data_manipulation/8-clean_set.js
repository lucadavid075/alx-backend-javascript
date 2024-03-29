/**
 *
 * @param {Set} set
 * @param {String} startString
 * @returns a string of all the set values that start with startString
 */

const cleanSet = (set, startString) => {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const parts = [];
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
};

export default cleanSet;
