module.exports = {
    publicPath: './',
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8000
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
};
