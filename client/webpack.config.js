const path = require('path');

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
        filename: './dist/scripts/[name].js',
        publicPath: '/',
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
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style",
                    "css!sass"
                )
            },

            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
              loader: "file"
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("./dist/styles/main.css")
    ],

    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: [
          path.resolve('./src')
        ]
  }
};