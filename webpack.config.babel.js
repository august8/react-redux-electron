import webpack from 'webpack';
import path from 'path';
import packageInfo from './package.json';

export default {
    entry: [
        path.join(__dirname, 'src/main'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              }
            ]
          },
          {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
          }
        ],
    },
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ],
      extensions: [
        '.js',
        '.jsx'
      ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
                PACKAGE_VERSION: JSON.stringify(packageInfo.version),
            },
        }),
    ],
};
