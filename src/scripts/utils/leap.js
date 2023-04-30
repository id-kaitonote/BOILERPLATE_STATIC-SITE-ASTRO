/**
 * 線形補完
 */

export default (start, end, time) => {
  const easeInOutQuint = (x) => {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2
  }
  return start + (end - start) * easeInOutQuint(time)
}
