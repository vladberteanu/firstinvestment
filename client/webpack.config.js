var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }

    return false;
}

module.exports = {
    entry: {
        main: './src/app/client.js'
    },

    output: {
        filename: './dist/scripts/[name].js'
    },

    devtool: getDevTool(),

    devServer: {
      historyApiFallback: true
    },

    module: {

        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!sass"
                )
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("./dist/styles/main.css")
    ]
};