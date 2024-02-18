export function parse(t) {
  const n = {},
    r = t.toString().split('\n')
  for (const t of r) {
    const r = t.match(/^([^=:#]+?)[=:](.*)/)
    if (r) {
      const t = r[1].trim(),
        o = r[2].trim().replace(/['"]+/g, '')
      n[t] = o
    }
  }
  return n
}
export function stringify(t) {
  let n = ''
  for (const [r, o] of Object.entries(t))
    if (r) {
      n += `${r}=${String(o)}` + '\n'
    }
  return n
}

// module.exports = {
//   parse,
//   stringify
// }
