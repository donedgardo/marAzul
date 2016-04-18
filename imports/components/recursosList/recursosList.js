import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './recursosList.html';
import '/public/scripts/jquery.selectric.min';

class RecursosListCtrl {}

const name = 'recursosList';
export default angular.module(name, [
  angularMeteor
])
.directive(name, function() {
  return{
    templateUrl: `imports/components/${name}/${name}.html`,
    controller: RecursosListCtrl,
    link: function(scope, elem, atrs){
      $('.orderby').selectric();


      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;

      $(".variables select").each(function() {
        if(!isMobile) {
          var sb = new SelectBox({
            selectbox: $(this)
          });
          void(sb);

        }
      });

      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(".variables select").css({'display':'block'});
      }

    }
  }
});
