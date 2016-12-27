var path = require('path');
var glob = require('glob');

// 单独封装各个页面JS文件
var entrySrc = function(globPath) {
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename;

    for (var i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        basename = path.basename(entry, '.js');
        //entries[path.join(dirname, basename)] = './' + entry;
        entries[path.join(basename)] = './' + entry;
    }

    return entries;
}

module.exports = {

    devtool: false, // 不开map 文件不会超级大
    entry: entrySrc('src/mainRouter/*.js'),
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                include: [
                    // 只去解析运行目录下的 app 文件夹
                    path.join(process.cwd(), './src')
                ],
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?name=/images/[name].[ext]' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, // use ! to chain loaders
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    //     root 和 moduledirectories 如果只从用法上来看，似乎是可以互相替代的。但因为 moduledirectories 
    // 从设计上是取相对路径，所以比起 root ，所以会多 parse 很多路径。
    // resolve: {
    //     modulesDirectories: ['node_modules', './app'],
    //     extensions: ['', '.js', '.jsx']
    // },
}
