import angular from 'angular';
import BeersApiService from './api/beersApi.service';
import utils from '../utils/api.service';

const services = angular.module('services', [utils.name])
  .service('BeersApiService', BeersApiService);

export default services;