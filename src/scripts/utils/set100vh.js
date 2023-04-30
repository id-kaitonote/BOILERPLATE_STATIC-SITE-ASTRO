import ELEMENTS from '../constants/elements'

/**
 * CSS変数に100vhをセットする。
 * @see https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 * @param {string} setProperty CSS変数名
 * @return {string} 1vhの高さを返す。
 */

export default (setProperty = '--vh') => {
  const vh = window.innerHeight * 0.01
  ELEMENTS.style.setProperty(setProperty, `${vh}px`)
}
