import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import titleBar from '../titleBar/titleBar';

import './loginPage.html';

class LoginPageCtrl {}

const name = 'loginPage';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  titleBar.name
])
.component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: LoginPageCtrl
})
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login-page></login-page>'
  });
}
