import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './mainHeader.html';
import '/public/scripts/hoverIntent.js';

class MainHeaderCtrl {}

export default angular.module('mainHeader', [
  angularMeteor
])
  .directive('mainHeader', function(){
    return{
      templateUrl: 'imports/components/mainHeader/mainHeader.html',
      controller: MainHeaderCtrl,
      link: function(scope, elem, attrs){
        $("#cart").hoverIntent({
          sensitivity: 3,
          interval: 60,
          over: function () {
            $('.cart-list', this).fadeIn(200);
            $('.cart-btn a.button', this).addClass('hovered');
          },
          timeout: 220,
          out: function () {
            $('.cart-list', this).fadeOut(100);
            $('.cart-btn a.button', this).removeClass('hovered');
          }
        });
      }
    }
  });
