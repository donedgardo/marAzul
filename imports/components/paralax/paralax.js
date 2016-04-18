import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './paralax.html';
import '/public/scripts/jquery.pureparallax';

class ParalaxCtrl {}

const name = 'paralax';
export default angular.module(name, [
  angularMeteor
])
  .directive(name, function() {
    return{
      templateUrl: `imports/components/${name}/${name}.html`,
      controller: ParalaxCtrl,
      link: function(scope, elem, atrs){
        $(".parallax-banner").pureparallax({
          overlayBackgroundColor: '#000',
          overlayOpacity : '0.45',
          timeout: 200
        });

        $(".parallax-titlebar").pureparallax({
          timeout: 100
        });
      }
    }
  });
