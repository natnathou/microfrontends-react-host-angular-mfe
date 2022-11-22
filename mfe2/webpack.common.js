const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  resolve: {
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
};
