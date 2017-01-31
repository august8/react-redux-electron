import webpack from 'webpack';
import path from 'path';
import packageInfo from './package.json';

const devtool = process.env.NODE_ENV === 'production' ? '#eval' : '#inline-source-map';

export default {
    devtool,
    entry: [
        path.join(__dirname, 'src/main'),
    ],
    output: {
        filename: path.join(__dirname, 'dist/bundle.js'),
    },
    devServer: {
        contentBase: 'dist',
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.json?$/,
                loader: 'json',
            },
            // {
            //     test: /\.css?$/,
            //     loader: 'style!css',
            // },
        ],
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
                PACKAGE_VERSION: JSON.stringify(packageInfo.version),
            },
        }),
    ],
};
