const path = require('path');
const chromeDriver = require('chromedriver');

require('babel-core/register');

const seleniumBIN = path.resolve('./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.5.3.jar');

module.exports = {
  custom_commands_path: 'source/libraries',
  src_folders: [
    'source/tests/website/',
  ],
  output_folder: false,
  selenium: {
    start_process: true,
    server_path: seleniumBIN,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromeDriver.path,
    },
  },
  test_settings: {
    default: {
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      globals: {
        waitForConditionTimeout: 5000,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
};
