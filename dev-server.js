const path = require("path");
const express = require("express");
const webpack = require("webpack");

const webpackDevMiddleware = require("webpack-dev-middleware");
const config = require("./webpack.config.js");
const plugin = require("./webpack.plugin.js");

const app = express(),
    PORT = 9000,
    complier = webpack(config),
    complierPlugin = webpack(plugin);

app.use(webpackDevMiddleware(complier, {
    //绑定中间件的公共路径,与webpack配置的路径相同
    publicPath: config.output.publicPath
}));

app.use(webpackDevMiddleware(complierPlugin, {
    //绑定中间件的公共路径,与webpack配置的路径相同
    publicPath: plugin.output.publicPath
}));

app.listen(PORT, function () {
    console.log("成功启动： " + PORT);
});