import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import paralax from '../paralax/paralax';
import categorySideBar from '../categorySideBar/categorySideBar';
import recursosList from '../recursosList/recursosList';

import './recursosPage.html';

function RecursosPageCtrl($scope){
  'ngInject';
}

const name = 'recursosPage';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  paralax.name,
  categorySideBar.name,
  recursosList.name
])
.component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: RecursosPageCtrl
})
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('recursos', {
      url: '/recursos',
      template: '<recursos-page></recursos-page>'
  });
}
