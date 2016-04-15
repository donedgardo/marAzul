import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './slider.html';
import './slider.css';

import '/public/scripts/jquery.themepunch.plugins.min.js';
import '/public/scripts/jquery.themepunch.revolution.min.js';

class SliderCtrl {
}

export default angular.module('slider', [
  angularMeteor
])
  .directive('slider', function() {
    return{
      templateUrl: 'imports/components/slider/slider.html',
      controller: SliderCtrl,
      link: function(scope, elem, attrs){

          $('.tp-banner').revolution({
            delay:9000,
            startwidth:1290,
            startheight:480,
            hideThumbs:10,
            hideTimerBar:"on",
            onHoverStop: "on",
            navigationType: "none",
            hideSliderAtLimit: 600,
            soloArrowLeftHOffset:0,
            soloArrowLeftVOffset:0,
            soloArrowRightHOffset:0,
            soloArrowRightVOffset:0
          });
      }
    }
  });
