/**
 * Changes the quantity of unique grocery items to 100.
 * @param {Map<String, number>} map - A map of the name of a
 * grocery and its quantity.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
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