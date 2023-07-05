/**
 * 
 * @param {*} map 
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const newMap = new Map();
  map.forEach((value, key) => {
    if (value === 1) {
      newMap.set(key, 100);
    }
  });
}
