/**
 * weakMap - instance WeakMap of endpoints to track the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * maximum number of calls for the endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 *
 * @param {{
 * protocol: 'http',
 * name: 'getUsers',
 * }} endpoint - endpoint to be queried
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  const count = weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);
  if (count >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
