/**
 * vite配置文件
 */

import type { ConfigEnv } from 'vite'

import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
/** 打包分析插件： https://www.npmjs.com/package/rollup-plugin-visualizer, 根目录会生成一个stats.html文件 */
import { visualizer } from 'rollup-plugin-visualizer'
/** 打包生成gzip： https://www.npmjs.com/package/vite-plugin-compression */
import viteCompression from 'vite-plugin-compression'

import pluginHtml from './pluginHtml'
import RollupOptions from './buildRollupOptions'

// https://vitejs.dev/config/
export default defineConfig((conf: ConfigEnv) => {
  // 获取env环境配置
  const env = loadEnv(conf.mode, process.cwd())

  /** 项目根目录 */
  return {
    plugins: [
      vue(),
      vueJsx(),
      visualizer(),
      viteCompression({
        /** @name 文件超过4kb则进行压缩 */
        threshold: 4096,
        /** @name 压缩算法:'gzip','brotliCompress' ,'deflate','deflateRaw' */
        algorithm: 'gzip',
        /** @name 压缩文件后缀名 */
        ext: 'gzip'
      }),
      /** 将 index.html 模版中的 ejs 变量替换为真实数据 */
      pluginHtml(conf, env)
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },
    /** 打包配置 */
    build: {
      /** 打包后存放的的文件夹 */
      outDir: env['VITE_OUT_DIR'] || 'dist',
      /** 配置不需要打包的依赖包 */
      rollupOptions: RollupOptions
    },
    server: {
      port: 3000,
      host: '0.0.0.0'
    },
    // 全局scss变量，混入
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "/src/assets/css/variables.scss";
            @import "/src/assets/css/mixins.scss";
          `
        }
      }
    }
  }
})
