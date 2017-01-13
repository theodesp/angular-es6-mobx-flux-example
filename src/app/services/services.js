import angular from 'angular';
import BeersApiService from './api/beersApi.service';
import BeerActionCreator from './actionCreators/beerActionCreator.service';
import utils from '../utils/api.service';
import stores from '../stores/stores';

const services = angular.module('services', [utils.name, stores.name])
  .service('beerActionCreator', BeerActionCreator)
  .service('beersApiService', BeersApiService);

export default services;