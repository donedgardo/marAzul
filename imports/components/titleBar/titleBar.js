import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './titleBar.view.html';

class TitleBarCtrl {}


export default angular.module('titleBar', [
  angularMeteor
])
  .directive('titleBar', function() {
    return {
      templateUrl: 'imports/components/titleBar/titleBar.view.html',
      controller: TitleBarCtrl,
      link: function(scope, elem, attrs){}
    }
  });
