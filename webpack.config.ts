import * as webpack from 'webpack';

const config: webpack.Configuration = {
  entry: {
    app: './src/index.ts',
  },
  output: {
    filename: 'dist/[name].js',
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
  }
}

export default config
