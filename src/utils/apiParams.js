/**
 * Builds a query string from a params object.
 * Only includes parameters that have a truthy value.
 *
 * @param {Object} params - The parameters to include in the query string.
 * @returns {string} The formatted query string (e.g., "?page=1&limit=10") or an empty string.
 */
export function buildQuery(params = {}) {
  const query = new URLSearchParams();
  for (const key in params) {
    if (params[key]) {
      query.set(key, params[key]);
    }
  }
  const qs = query.toString();
  return qs ? `?${qs}` : '';
}
