var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/, presets: ['react'] },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['react'] } }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};