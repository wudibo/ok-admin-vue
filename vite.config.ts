import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// const path = require('path')
// Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中
// const dotenv = require("dotenv")

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "comps": path.resolve(__dirname, "src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/css/variables.less";' +
            '@import "./src/assets/css/mixins.less";'
      }
    }
  }
})
