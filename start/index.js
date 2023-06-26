/*
 * @Description: 该文件用于调试运行和打包的脚本
 */
const { getEnvShell } = require('./utils')
const shell = require('shelljs')
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

/** 运行脚本 */
checkList().then((command) => {
  console.log('command: ', command)
  shell.exec(command)
})
