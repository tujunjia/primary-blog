/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  // 添加 view 配置
  exports.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.njk',
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1572315514243_5626';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
