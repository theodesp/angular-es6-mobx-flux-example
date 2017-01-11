import angular from 'angular';
import ExploreComponent from './explore/explore.component';

const components = angular.module('components', [])
  .component('explore', ExploreComponent);

export default components;