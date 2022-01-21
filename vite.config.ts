import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginEslint from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// https://cn.vitejs.dev/config/#build-assetsdir
// https://vitejs.dev/config/
// https://www.vitejs.net/guide/build.html#公共基础路径
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
// const dotenv = require("dotenv")


function pathResolve(dir: string) {
  return path.resolve(process.cwd(), '.', dir);
}
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    plugins: [vue(), vitePluginEslint({
      cache: false // 禁用eslint缓存
    }), vueJsx(), visualizer()],
    base: env['VITE_PUBLIC_PATH'] || '/',
    resolve: {

      alias: [
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        }
        // {
        //   comps: path.resolve(__dirname, 'src/components')
        // }
      ]
    },
    server: {
      port: 3000,
      host: '0.0.0.0'
    },
    build: {
      outDir: env['VITE_OUT_DIR'] || 'dist'
    }
    // 全局css变量，混入

    /* css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "./src/assets/css/variables.scss";' + '@import "./src/assets/css/mixins.scss";'
        }
      }
    } */
  }
})
