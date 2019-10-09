/**
 * @param {number} index
 * @param {number} total
 * @return {string}
 */
export function calculateAnimationDelay(index, total) {
  return `${(index - total + 10) * 50}ms`;
}
