import 'normalize.css/normalize.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routes from './app.config';
import AppController from './app.controller';
import app from './app.directive';

angular.module('app', [uirouter])
  .config(routes)
  .directive('app', app)
  .controller('AppCtrl', AppController);