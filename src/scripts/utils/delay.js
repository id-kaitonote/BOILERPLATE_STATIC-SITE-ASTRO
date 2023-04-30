/**
 * 処理を遅らせる
 */

export default (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
