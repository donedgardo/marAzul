import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import {Meteor} from 'meteor/meteor';

import './loginRegister.html';

class LoginRegisterCtrl {
  constructor($state){
    this.errMsg = '';
  }

  login(email, password){
    //Validate Form
    if(email && password){
    }
    console.log(email, password);
  }


  register(email, password, password2){
    console.log(email, password, password2);
    //Validate Form
    if(email && password && password == password2){
      let options = {email, password}
      Accounts.createUser(options, this.createUserCallback);
    }else if(password !== password2){
      this.errMsg = "Passwords must match.";
    }else{
      this.errMsg = "Please fill out all fields";
    }
  }

  createUserCallback(err, data){
    if(err) throw console.log(err);
    console.log(data);
    $state.go('home');
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
    controller: LoginRegisterCtrl,
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

    }
  }
});
