export default {
  extends: [
    "markuplint:recommended"
  ],
  parser: {
    ".astro$": "@markuplint/astro-parser"
  }
}
