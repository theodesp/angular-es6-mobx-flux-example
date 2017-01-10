const routes = ($stateProvider, $locationProvider, $urlRouterProvider) => {
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      component: 'app',
    })
};

export default routes;