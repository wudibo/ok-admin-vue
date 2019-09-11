module.exports = {
    publicPath: './',
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8000,
        proxy: {
            'api': {
                target: 'http://localhost:8000',
                bypass: function (req, res) {
                    if(req.headers.accept.indexOf('html') !== -1) {
                        return '/index.html';
                    } else {
                        const name = req.path.split('/api/')[1].split('/').join('-');
                        const mock = require(`./mock/${name}`);
                        const result = mock(req.method);
                        delete require.cache[(`./mock/${name}`)];
                        return res.send(result);
                    }
                }
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    }
};
