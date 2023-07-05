/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();
/**
 *
 * @param {*} endpoint - accepts endpoint argument
 */

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const count = weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
