export default /* @ngInject */ ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/',
      views: {
        content: {
          templateUrl: 'scripts/views/main.html',
          controller: 'WeatherController as weatherCtrl'
        }
      }
    });

};
