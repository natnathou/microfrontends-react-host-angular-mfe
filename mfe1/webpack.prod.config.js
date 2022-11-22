const configDev = require("./webpack.config");

const configProd = {
  ...configDev,
  optimization: { ...configDev.optimization },
};
configProd.optimization.runtimeChunk = true;

module.exports = configProd;
