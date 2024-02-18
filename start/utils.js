/*
 * @Description: 工具库
 */
// const path = require('path')
// const fs = require('fs');
// const { parse } = require('./envfile')

import path from 'path'
import fs from 'fs'
import { parse } from './envfile.js'

/**
 * @Description 获取根目录下所有的.env.*文件
 */
function getPathEnvs() {
  /** 项目根目录 */
  const directory = path.resolve('./')
  const firstName = '.env.' // 文件开头的名字
  /** 存储所有.env.*的文件信息 */
  const envs = []
  return new Promise((resolve) => {
    fs.readdir(directory, function (err, files) {
      if (err) {
        resolve(envs)
        return
      }
      files.forEach((fileName) => {
        // 如果fileName是以.env.开头的字符串
        if (`${fileName}`.indexOf(firstName) === 0) {
          envs.push({
            /** 文件绝对路径 */
            path: path.join(directory, fileName),
            /** 文件名 */
            fileName,
            /** 运行模式 */
            mode: `${fileName}`.substring(firstName.length)
          })
        }
      })
      resolve(envs)
    })
  })
}

/** 获取所有配置的脚本 */
export async function getEnvShell() {
  /** 类型检查命令 */
  const type_check = 'vue-tsc --build --force'
  const envs = await getPathEnvs()
  const shellSet = {
    commands: {
      debug: {},
      build: {}
    },
    environment: []
  }
  envs.forEach((item) => {
    const parsedFile = parse(fs.readFileSync(item.path, 'utf-8'))
    shellSet.environment.push({
      name: parsedFile.VITE_APP_ENVNAME,
      value: item.mode
    }) // "build-only {@}" --
    shellSet.commands.debug[item.mode] = `vite --mode ${item.mode}`
    shellSet.commands.build[item.mode] = `${type_check} && vite build --mode ${item.mode}`
  })

  return shellSet
}

// module.exports = {
//   getEnvShell
// }
