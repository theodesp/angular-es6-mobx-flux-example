const config = ($stateProvider, $locationProvider, $urlRouterProvider, cfpLoadingBarProvider) => {
  'ngInject';

  cfpLoadingBarProvider.spinnerTemplate = '<div id="loading-bar-spinner"><span class="fa fa-spinner">Fetching Beer...</div>';

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      component: 'app',
    })
};

export default config;