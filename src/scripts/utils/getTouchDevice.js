/**
 * タッチデバイスを判定する。
 * @return {boolean} タッチデバイスかどうかを返す真偽値
 */

export default () => {
  if (
    navigator.userAgent.indexOf('iPhone') > 0 ||
    navigator.userAgent.indexOf('iPod') > 0 ||
    (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)
  ) {
    return true
  } else if (navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('Android') > 0) {
    return true
  } else if (
    navigator.userAgent.indexOf('Safari') > 0 &&
    navigator.userAgent.indexOf('Chrome') == -1 &&
    typeof document.ontouchstart !== 'undefined'
  ) {
    return true
  } else {
    return false
  }
}
