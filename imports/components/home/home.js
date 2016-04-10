import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import titleBar from '../titleBar/titleBar';
import slider from '../slider/slider';
import articleCarousel from '../articleCarousel/articleCarousel';

import './home.view.html';

class HomeCtrl {}

const name = 'home';

export default angular.module(name, [
  angularMeteor,
  uiRouter,
  titleBar.name,
  slider.name,
  articleCarousel.name
])
.component(name, {
  templateUrl: `imports/${name}/${name}.view.html`,
  controller: HomeCtrl
})
.config(config);

function config($stateProvider){
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>'
  });
}
