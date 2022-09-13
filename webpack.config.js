const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* It copies the style.css file to the dist folder. */
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/App.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
              test: /.(css|scss)$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    postcssOptions: {
                      plugins: () => [
                        require('autoprefixer')
                      ],
                    },
                  },
                },
                {
                  loader: 'sass-loader',
                },
              ],
            },
            {
              test: /\.png|svg|jpg|gif$/,
              type: 'asset/resource',
              exclude: /node_modules/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    publicPath: '/public',
                    outputPath: '/public/assets',
                  },
                },
                {
                  loader: 'url-loader',
                  options: {
                    limit: 8192,
                  },
                },
              ],
            }
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js', '.ts', '.tsx'],
    },
    plugins: [
        /* Creating a new index.html file in the dist folder. */
        new HtmlWebpackPlugin({
            template: './client/index.html',
            filename: './index.html',
            // inject: false,
            // minify: false,
        }),
        new CopyPlugin({
            patterns: [{ from: './client/style.css' }],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        port: 8080,
        hot: true,
        proxy: {
            '/*': 'http://localhost:3000',
            secure: false
        }
    },

}