/*
 * WeatherApp
 */

import 'angular';
import 'angular-ui-router';

import config from './config';
// import templatesModule from './_templates';

import WeatherFactory from './services/weatherFcty.js';
import WeatherController from './controllers/weatherCtrl.js';

angular
  // .module('weatherApp', ['ui.router', templatesModule.name])
  .module('weatherApp', ['ui.router'])
  .config(config)
  .service('WeatherFactory', WeatherFactory)
  .controller('WeatherController', WeatherController);

// bootstrap app
angular.element(document).ready(() => {
  // angular.bootstrap(document, [app.name]);
  angular.bootstrap(document, ['weatherApp']);
});
