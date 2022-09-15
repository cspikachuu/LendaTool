const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* It copies the style.css file to the dist folder. */
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
              test: /\.jsx?/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
              },
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
                // {
                //   loader: 'typings-for-css-modules-loader',
                //   options: {
                //     modules: true,
                //     namedExport: true
                //   }
                // },
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
            title: 'Development',
            template: './client/index.html',
            // filename: './index.html',
            inject: false,
            minify: false,
        }),
        new CopyPlugin({
            patterns: [{ from: './client/styles.css' },  { from: "./config/*", to: "./models" }],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'client'),
            publicPath: '/client'
        },
        host: 'localhost',
        port: 8080,
        compress: true,
        hot: true,
        proxy: {
          '/**': {
            target: 'http://localhost:3000/',
            secure: false,
            // changeOrigin: true,
          }
        }
    },

}