import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';
import template from './mainHeader.html';
import '/public/scripts/hoverIntent.js';
import angularMeteorAuth from 'angular-meteor-auth';

function MainHeaderCtrl($scope, $reactive){
  'ngInject';
  $reactive(this).attach($scope);
  console.log($scope.currentUser);
}

const name = 'mainHeader';

export default angular.module(name, [
  angularMeteor,
  angularMeteorAuth
])
  .directive(name, function(){
    return{
      templateUrl: `imports/components/${name}/${name}.html`,
      controller: MainHeaderCtrl,
      controllerAs: name,
      link: function(scope, elem, attrs){
        $("#account").hoverIntent({
          sensitivity: 3,
          interval: 60,
          over: function(){
            $('.account-dropdown', this).fadeIn(200);
            $('.account-btn a.button', this).addClass('hovered');
          },
          timeout: 220,
          out: function(){
            $('.account-dropdown', this).fadeOut(200);
            $('.account-btn', this).removeClass('hovered');
          }
        });

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
