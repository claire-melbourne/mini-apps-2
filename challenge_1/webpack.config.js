const path = require('path');
const SRC_DIR = path.join(__dirname, '/client')
module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  watch: true
};