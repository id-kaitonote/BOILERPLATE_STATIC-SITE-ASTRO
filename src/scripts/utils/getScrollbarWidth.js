import ELEMENTS from '../constants/elements'

/**
 * スクロールバーの横幅を取得する。
 * @return {number} スクロールバーの横幅を返す。
 */

export default () => {
  return window.innerWidth - ELEMENTS.BODY.clientWidth
}
