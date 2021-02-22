let connectHistoryApiFallback = require('connect-history-api-fallback');
const express = require('express'),
   app = express(),
   port = 3000,
   npm_lifecycle_script = process.env.npm_lifecycle_script,//得到启动的命令
   process_env = {
      PORT: 3000,
      NODE_ENV: "production",//production: 生产环境，development: 开发环境
   };
   
npm_lifecycle_script.split(" ").forEach(item => {
	if (item.indexOf("=") >= 0) {
		temp = item.split("=");
		if (temp.length > 0) {
			process_env[temp[0]] = temp[1] === undefined ? "" : temp[1];
		}
	}
});

app.use('/', connectHistoryApiFallback());
if (process_env.NODE_ENV === 'gitee') {
   app.use(express.static('./ok-admin-vue'));
} else {
   app.use(express.static('./dist'));
}

app.listen(port, function () {
   console.log("http://localhost:" + process_env.PORT);
});