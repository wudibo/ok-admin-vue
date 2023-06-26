/**
 * @description 处理打包时忽略引入的库，并且在全局变量中注入
 * @info 配置忽略的库，可以减少打包后的体积，但是需要在html中引入对应的cdn
 * 配置全局变量，可以在ts中使用对应的库，可在pluginHtml.ts中配置cdn
 */

/** 插件可以告诉 Rollup 哪些库是不需要打包的 */
import externalGlobals from 'rollup-plugin-external-globals'

export default {
  external: ['@antv/g2', 'axios'],
  plugins: [
    externalGlobals({
      '@antv/g2': 'G2',
      axios: 'axios'
    })
  ]
}
