import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Meteor} from 'meteor/meteor';

import './loginRegister.html';

function LoginRegisterCtrl($scope, $state, $reactive) {
  'ngInject';
  $scope.errMsg = '';

  $reactive(this).attach($scope);

  this.login = function(email, password){
    if(email && password){
      Meteor.loginWithPassword(email, password, function(err, data){
        if(err){
          console.log(err);
          $scope.errMsg = err.reason;
          $scope.$digest();
        }else{
          $state.go('home');
        }
      });
    }
    console.log(email, password);
  }

  // Register Function
  this.register = function(email, password, password2){
    console.log(email, password, password2);
    //Validate Form
    //Valid Form
    if(password !== password2){
      $scope.errMsg = "Passwords must match.";
    }else if(email && password && password == password2){
      let options = {email:email, password:password};
      Accounts.createUser(options, function(err){
        if(err){
          console.log(err);
          $scope.errMsg = err.reason;
        }else{
          $state.go('home');
        }
      });
    }else{
      $scope.errMsg = "Please fill out all fields";
    }
  }
}

const name = 'loginRegister';

export default angular.module(name, [
  angularMeteor,
  uiRouter
])
.directive(name, function(){
  return{
    templateUrl: `imports/components/${name}/${name}.html`,
    controller:  LoginRegisterCtrl,
    controllerAs: name,
    link: function(scope, elem, attrs){
      // Tabs
      //----------------------------------------//
      var $tabsNav    = $('.tabs-nav'),
      $tabsNavLis = $tabsNav.children('li');
      // $tabContent = $('.tab-content');

      $tabsNav.each(function() {
        var $this = $(this);

        $this.next().children('.tab-content').stop(true,true).hide()
        .first().show();

        $this.children('li').first().addClass('active').stop(true,true).show();
      });

      $tabsNavLis.on('click', function(e) {
        var $this = $(this);

        $this.siblings().removeClass('active').end()
        .addClass('active');

        $this.parent().next().children('.tab-content').stop(true,true).hide()
        .siblings( $this.find('a').attr('href') ).fadeIn();

        e.preventDefault();
      });

      $("a.close").removeAttr("href").click(function(){
        $(this).parent().fadeOut(200);
      });

    }
  }
});
