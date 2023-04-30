import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import ELEMENTS from '../constants/elements'
import GetScrollbarWidth from './getScrollbarWidth'

/**
 * 背景を固定する。固定しない時はスクロールバー分の余白をbodyに付与する。
 * @param {boolean} target 背景固定をするか判定する真偽地
 */

export default (isStop = true) => {
  ELEMENTS.BODY.style.paddingRight = isStop ? `${GetScrollbarWidth()}px` : ''

  if (!isStop) {
    disableBodyScroll(ELEMENTS.HEADER)
  } else {
    clearAllBodyScrollLocks()
  }
}
