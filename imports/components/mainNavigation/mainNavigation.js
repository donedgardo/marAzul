import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './mainNavigation.html';
import '/public/scripts/superfish.js';
import '/public/scripts/jquery.jpanelmenu.js';

class MainNavigationCtrl {}

export default angular.module('mainNavigation', [
  angularMeteor
])
  .directive('mainNavigation', function() {
    return{
      templateUrl: 'imports/components/mainNavigation/mainNavigation.html',
      controller: MainNavigationCtrl,
      link: function(scope, elem, atrs){
        $('ul.menu').superfish({
          delay:       400,                    // delay on mouseout
          speed:       200,                    // faster animation speed
          speedOut:    100,                    // speed of the closing animation
          autoArrows:  true                    // disable generation of arrow mark-up
        });

        var jPanelMenu = $.jPanelMenu({
          menu: '#responsive',
          animated: false,
          keyboardShortcuts: true
        });
        jPanelMenu.on();

        $(document).on('click',jPanelMenu.menu + ' li a',function(e){
          if ( jPanelMenu.isOpen() && $(e.target).attr('href').substring(0,1) === '#' ) { jPanelMenu.close(); }
        });

        $(document).on('touchend','.menu-trigger',function(e){
          jPanelMenu.triggerMenu();
          e.preventDefault();
          return false;
        });

        // Removes SuperFish Styles
        $('#jPanelMenu-menu').removeClass('menu');
        $('ul#jPanelMenu-menu li').removeClass('dropdown');
        $('ul#jPanelMenu-menu li ul').removeAttr('style');
        $('ul#jPanelMenu-menu li div').removeClass('mega');
        $('ul#jPanelMenu-menu li div').removeAttr('style');
        $('ul#jPanelMenu-menu li div div').removeClass('mega-container');


        $(window).resize(function (){
          var winWidth = $(window).width();
          if(winWidth>767) {
            jPanelMenu.close();
          }
        });

      }
    }
  });
