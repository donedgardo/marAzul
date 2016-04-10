import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import titleBar from '../titleBar/titleBar';
import slider from '../slider/slider';
import articleCarousel from '../articleCarousel/articleCarousel';

import './landingPage.html';

class HomeCtrl {}

const name = 'landingPage';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  titleBar.name,
  slider.name,
  articleCarousel.name
])
.component(name, {
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: HomeCtrl
})
.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      template: '<landing-page></landing-page>'
  });
}
