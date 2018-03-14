const webpackConfigs = require('./webpack');

module.exports = (configName = 'development') => {
  const loadedInstance = new webpackConfigs[configName]();

  return loadedInstance.config;
};
