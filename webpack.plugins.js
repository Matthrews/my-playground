const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');


module.exports = [
    new ForkTsCheckerWebpackPlugin(),
    new SpeedMeasurePlugin()
];
