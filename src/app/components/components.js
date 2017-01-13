import angular from 'angular';
import services from '../services/services';
import stores from '../stores/stores';
import ExploreComponent from './explore/explore.component';
import BeerViewComponent from './beerView/beerView.component';


const components = angular.module('components', [services.name, stores.name])
  .component('explore', ExploreComponent)
  .component('beerView', BeerViewComponent);

export default components;