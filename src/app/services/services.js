import angular from 'angular';
import BeersApiService from './api/beersApi.service';
import BeerActionCreator from './actionCreators/beerActionCreator.service';
import utils from '../utils/api.service';

const services = angular.module('services', [utils.name])
  .service('BeerActionCreator', BeerActionCreator)
  .service('BeersApiService', BeersApiService);

export default services;