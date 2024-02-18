/**
 * @description: 将 index.html 模版中的 ejs 变量替换为真实数据
 */

import { createHtmlPlugin } from 'vite-plugin-html'
import type { ConfigEnv } from 'vite'
type Data = { [key: string]: unknown }

// 此插件供index.html模板使用，参考：https://www.jianshu.com/p/77cceaaa4723
export default function pluginHtml(conf: ConfigEnv, env: Data) {
  // 是否是打包
  const isBuild = conf.command === 'build'
  return createHtmlPlugin({
    /** 是否压缩 html */
    minify: true,
    /**
     * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
     * @default index.html
     */
    template: 'index.html',
    /** 需要注入 index.html ejs 模版的数据 */
    inject: {
      data: {
        ...env,
        /** 打包需要注入的script cdn */
        injectScript: isBuild
          ? `
              <script src="https://cdn.bootcdn.net/ajax/libs/axios/1.6.7/axios.min.js"></script>
              <script src="https://gw.alipayobjects.com/os/lib/antv/g2/5.1.14/dist/g2.min.js"></script>
            `
          : ''
      }
    }
  })
}
