const path = require('path');

module.exports = {  
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),  // will create the file here
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, 
            exclude: /node_modules/
        }, { 
        test: /\.s?css$/,
        use: [
            'style-loader', 'css-loader', 'sass-loader'
            ]
        }, {
            test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'
        }],
          
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {  // generating the bundle file, serving up from memory
        contentBase: path.join(__dirname, 'public')
    }
};