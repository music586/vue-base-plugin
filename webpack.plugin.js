const path = require("path");

module.exports = {
    entry: {
        'base': './src/plugins/base.js', 
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/plugins'),
        clean: true,
    },
    mode: "development",
}