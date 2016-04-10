import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import topBar from '../topBar/top-bar';
import mainHeader from '../mainHeader/mainHeader';
import mainNavigation from '../mainNavigation/mainNavigation';
import footerMain from '../footerMain/footer';
import './marAzul.html';

class MarAzul {}

const name = 'marAzul';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  topBar.name,
  mainHeader.name,
  mainNavigation.name,
  footerMain.name,
])
.component(name,{
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: MarAzul
})
.config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5mode(true);

  $urlRouterProvider.otherwise('/');
}
