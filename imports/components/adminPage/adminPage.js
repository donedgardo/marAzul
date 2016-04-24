import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import {name as categoryForm} from '../categoryForm/categoryForm';
import {name as categoryList} from '../categoryList/categoryList';

import './adminPage.html';

function AdminPageCtrl($scope){
  'ngInject';
}

const name = 'adminPage';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  categoryForm,
  categoryList
])
.component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: AdminPageCtrl
})
.config(config);

function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('admin', {
      url: '/admin',
      template: '<admin-page></admin-page>'
  });
}
