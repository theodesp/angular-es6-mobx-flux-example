import angular from 'angular';

class ApiService {
  constructor($http) {
    'ngInject';

    this.$http = $http;
  }

  fetch = (url) => {
    return this.$http.get(url);
  };

}

const utils = angular.module('utils', [])
  .service('apiService', ApiService);

export default utils;
