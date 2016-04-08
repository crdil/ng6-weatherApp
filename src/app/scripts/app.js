import 'angular';
import 'angular-ui-router';

import config from './config';
import templatesModule from './_templates';

import WeatherFactory from './services/weatherFcty.js';
import WeatherController from './controllers/weatherCtrl.js';

// define app module
var app = angular.module('app', [
  'ui.router',
  templatesModule.name
]);

// configure app
app.config(config);

//
app.service('WeatherFactory', WeatherFactory);
app.controller('WeatherController', WeatherController);

// bootstrap app
angular.element(document).ready(() => {
  angular.bootstrap(document, [app.name]);
});
