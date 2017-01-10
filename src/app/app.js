import 'normalize.css/normalize.css';
import 'wingcss/dist/wing.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.config';

import appComponent from './app.component';

const app = angular
  .module('app', [uirouter])
  .component('app', appComponent)
  .config(routes);
