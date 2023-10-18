function strToJson(str: string) {
  str = str.replace(/\n/g, '') //去掉字符串中所有的换行符
  str = str.replace(/'/g, '"') // 将所有的单引号替换成双引号
  str = str.replace(/(['"])?(\w+)(['"])?:/g, '"$2":')
  str = str.replace(/'([^']*?)'/g, '"$1"')
  console.log('str==', str)

  return JSON.parse(str)
}

function toKebabCase(str: string) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

export function convertRNToCSS(stylesStr: string) {
  const styles = strToJson(stylesStr)
  let css = ''
  const pxUnits = [
    'fontSize',
    'height',
    'width',
    'lineHeight',
    'padding',
    'paddingHorizontal',
    'paddingVertical',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'borderRadius'
  ]

  for (const className in styles) {
    const classStyles = styles[className]
    css += `.${toKebabCase(className)} {\n`

    for (let styleName in classStyles) {
      let styleValue = classStyles[styleName]

      // Convert camelCase to kebab-case
      styleName = toKebabCase(styleName)

      // Add 'rpx' to certain styles
      if (pxUnits.includes(styleName)) {
        styleValue = styleValue + 'rpx'
      }

      css += `  ${styleName}: ${styleValue};\n`
    }

    css += `}\n`
  }

  return css
}
