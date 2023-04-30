import DEFINE from '../constants/define'

/**
 * ブレイクポイントとビューポートを比較する。
 * @return {string} ビューポートがブレイクポイントよりもよりも大きいか小さいかを返す。
 */

export default (tb) => {
  if (tb) {
    return window.matchMedia(`(min-width: ${DEFINE.BREAKPOINT_TB}px)`).matches ? 'lg' : 'sm'
  } else {
    return window.matchMedia(`(min-width: ${DEFINE.BREAKPOINT}px)`).matches ? 'lg' : 'sm'
  }
}
