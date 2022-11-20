const configDev = require("./webpack.config");

const configProd = {
  ...configDev,
  optimization: { ...configDev.optimization },
};
configProd.optimization.runtimeChunk = true;
configProd.optimization.splitChunk = true;
