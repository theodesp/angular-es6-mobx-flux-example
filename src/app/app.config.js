const routes = ($stateProvider, $locationProvider, $urlRouterProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      template: require('./app.html'),
      controller: 'AppCtrl',
      controllerAs: 'vm'
    })
}

export default routes;