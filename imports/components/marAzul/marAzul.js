import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import topBar from '../topBar/top-bar';
import mainHeader from '../mainHeader/mainHeader';
import mainNavigation from '../mainNavigation/mainNavigation';
import footerMain from '../footerMain/footer';
import landingPage from '../landingPage/landingPage';
import loginPage from '../loginPage/loginPage';
import loginRegister from '../loginRegister/loginRegister';
import recursosPage from '../recursosPage/recursosPage';
import {name as Admin} from '../adminPage/adminPage';


import './marAzul.html';

class MarAzul {}

const name = 'marAzul';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  landingPage.name,
  loginPage.name,
  loginRegister.name,
  topBar.name,
  mainHeader.name,
  mainNavigation.name,
  footerMain.name,
  recursosPage.name,
  Admin
])
.component(name,{
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: MarAzul
})
.config(config);

config.$inject = ["$locationProvider", "$urlRouterProvider"];
function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/');
}
