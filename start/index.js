/*
 * @Description: 该文件用于调试运行和打包的脚本
 */

const { spawn } = require('cross-spawn')
const chalk = require('chalk')
const { getEnvShell } = require('./utils.js')
const inquirer = require('inquirer')

/** 打包之后预览命令 */
// const preview = "vite preview"

async function checkList() {
  const { commands, environment } = await getEnvShell()
  const promptList = [
    {
      type: 'list',
      message: '请选择运行模式：',
      name: 'mode',
      choices: [
        {
          name: '调试',
          value: 'debug'
        },
        {
          name: '打包',
          value: 'build'
        }
      ]
    },
    {
      type: 'list',
      message: '请选择编译环境：',
      name: 'environment',
      choices: environment
    }
  ]
  const prompt = await inquirer.prompt(promptList)
  return commands[prompt.mode][prompt.environment]
}

/** 运行脚本: https://www.npmjs.com/package/cross-spawn */
checkList().then((command) => {
  const commands = command.split('&&').map((item) => item.trim())
  const children = commands.map((item) => item.split(' '))
  // 这里运行的pnpm是根据你的项目安装使用的包管理工具来决定的
  console.log('执行的脚本: ', chalk.green(command));
  children.forEach((child) => {
    spawn.sync('pnpm', child, {
      stdio: 'inherit'
    })
  })
})
