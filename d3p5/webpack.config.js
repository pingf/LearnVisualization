var webpack = require("webpack");

module.exports = {
    entry: {
        index: ['./p5examples/0001.js','webpack/hot/dev-server'],
    },
    output: {
        path: __dirname+"/build",
        publicPath: '/assets/',
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: "babel"},
        ],
    },
    stats: {
        colors: true,
        reasons: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            p5: 'p5',
            d3: 'd3'
        })
    ]
};