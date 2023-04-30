/**
 * 文字列を一文字づつspanタグで囲む関数です。
 */

export default (text) => {
  return text
    .split('')
    .map((char) => `<span style="display: inline-block;">${char}</span>`)
    .join('')
}
