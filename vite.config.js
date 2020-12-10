module.exports = {
	alias: {
		'/@/': require('path').resolve(__dirname, 'src'),
	},
	optimizeDeps: {
		include: ["@ant-design/icons-vue"],
	},
};