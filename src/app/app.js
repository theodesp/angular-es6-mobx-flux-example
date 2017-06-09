import 'normalize.css/normalize.css';
import 'wingcss/dist/wing.css';
import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import services from './services/services';
import stores from './stores/stores';
import components from './components/components';
import config from './app.config';
import appComponent from './app.component';

const app = angular
  .module('app', [uirouter, services.name, components.name, stores.name, 'angular-loading-bar'])
  .component('app', appComponent)
  .config(config);