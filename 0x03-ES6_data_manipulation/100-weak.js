/**
 * weakMap - instance WeakMap (track the number of calls made)
 */
export const weakMap = new WeakMap();

/**
 * maximum number of calls for the endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 *
 * @param {
 * protocol: 'http'(String),
 * name: 'getUsers'(String),
 * } endpoint - endpoint to be queried
 */

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
