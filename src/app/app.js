import 'normalize.css/normalize.css';
import 'wingcss/dist/wing.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import services from './services/services';
import components from './components/components';
import routes from './app.config';
import appComponent from './app.component';

const app = angular
  .module('app', [uirouter, services.name, components.name])
  .component('app', appComponent)
  .config(routes);