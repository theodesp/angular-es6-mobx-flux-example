import angular from 'angular';
import BeerStore from './beerStore/beerStore.service';

const stores = angular.module('stores', [])
  .service('beerStore', BeerStore)
  .run((beerStore) => {
    'ngInject';
    beerStore.init();
  });

export default stores;