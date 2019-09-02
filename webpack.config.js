const path = require('path')
const Html = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    //输出的文件是一行还是一排
    mode: 'development',
    //配置sourceMap
    devtool:'source-map',
    //入口文件
    entry: {
        main: './babel.js',
        // sub: './index.js'
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true,
        hotOnly: true
    },
    module: {
        rules:[{
            //判断是否是这个后缀的文件(图片)
            test: /\.(jpg|png|svg)$/,
            test:  { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" ,
                options: {
                    "presets": ["@babel/preset-env"]
                }
            },
            use: {
                //使用url-loader
                loader: 'url-loader',
                options: {
                    //placeholder 占位符
                    name: '[name]_[hash].[ext]',
                    //输出文件的路径
                    outputPadth: 'images/',
                    //如果你的图片小于2048字节 会包打包成base64  大于则打包成图片
                    limit: 2048
                }
            }
        },
        {
            //判断是否是这个后缀的文件(图片)
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }
    ]
    },
    plugins: [new Html({
        template:'./index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
    ],
    //出口文件
    output: {
        // publicPath:'http://cdn.com.cn',//引用cdn
        filename: '[name].js',
        path: path.resolve(__dirname,"bundle")
    }
}