/**
 * class名の取得。
 * @param {HTMLElement} target class名を取得するDOM要素
 * @return {string} class名を返す。
 */

export default (target) => String(target.classList).split(' ')
