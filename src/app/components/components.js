import angular from 'angular';
import services from '../services/services';
import ExploreComponent from './explore/explore.component';

const components = angular.module('components', [services.name])
  .component('explore', ExploreComponent);

export default components;