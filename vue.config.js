// const path = require("path");
// const productionGzipExtensions = ['js', 'css'];
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
	publicPath: process.env.NODE_ENV === 'getee' ? '/ok-admin-vue' : '/',
	outputDir: 'dist', // 构建输出目录
	assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
	lintOnSave: true, //是否开启eslint代码检查
	runtimeCompiler: true, // 运行时版本是否需要编译
	transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
	productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
	parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
	devServer: {
		disableHostCheck: true,
		inline: true,
		hot: true,
		stats: 'minimal',
		contentBase: __dirname,
		overlay: true,
		historyApiFallback: true
	},


	// configureWebpack: config => {
	// 	/**打包压缩gzip*/
	// 	const _config = {
	// 		plugins: [
	// 			new CompressionWebpackPlugin({
	// 				filename: '[path].gzip[query]',   // 提示compression-webpack-plugin@2.0.0的话filename改为asset
	// 				algorithm: 'gzip',
	// 				test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
	// 				threshold: 5120, //文件超过5kb进行压缩（只处理比这个值大的资源。单位按字节(byte)计算）
	// 				minRatio: 0.8  //只有压缩率比这个值小的资源才会被处理
	// 			})
	// 		]
	// 	};
	// 	//不是开发环境的时候使用的cdn
	// 	if (process.env.NODE_ENV !== 'development') {
	// 		_config.externals = {
	// 			'vue': 'Vue',
	// 			'vue-router': 'VueRouter',
	// 			'vuex': 'Vuex',
	// 			'vant': 'vant',
	// 		};
	// 	}
	// 	return _config;
	// }
};
