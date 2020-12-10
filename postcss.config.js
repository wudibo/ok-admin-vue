module.exports = {
	// 补全css前缀(解决兼容性)
	plugins: {
		'autoprefixer': {
			browsers: [
				"last 5 version",
				">= 1%",
			]
		},
	}
}