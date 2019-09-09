// webpack 官方参考链接: https://cli.vuejs.org/zh/guide/webpack.html
module.exports = {
    // vue-cli-service 官方参考链接: https://cli.vuejs.org/zh/guide/cli-service.html#vue-cli-service-serve
    devServer: {
        // 在服务器启动时打开浏览器
        open: true,
        // TODO 在服务器启动时将 URL 复制到剪切版
        // copy: true,
        // 指定 host (默认值：0.0.0.0)
        host: '0.0.0.0',
        // 指定 port (默认值：8080)
        port: 8000,
        // 使用 https (默认值：false)
        // https: false
    },
    // PostCSS 官方参考链接: https://cli.vuejs.org/zh/guide/css.html#postcss
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
}
