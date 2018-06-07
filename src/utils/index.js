export const flattenClass = params => {
  const flattenArray = Object.keys(params).map(v => {
    return params[v] ? v : ''
  })
  return flattenArray.join(' ')
}
