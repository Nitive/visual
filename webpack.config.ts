import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: {
    client: './src/index.ts',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts']
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
}

export default config
