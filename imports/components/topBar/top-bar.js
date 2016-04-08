import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './top-bar.html';

class TopBarCtrl {
  constructor(){
    this.navigation = [{
      name: 'home'
    }, {
      name: 'workshop'
    }, {
      name: 'resources'
    }];
  }
}

export default angular.module('topBar', [
  angularMeteor
])
  .directive('topBar', function() {
    return {
      templateUrl: 'imports/components/topBar/top-bar.html',
      controller: TopBarCtrl,
      link: function(scope, elem, attrs){
        $('.top-bar-dropdown').click(function(event) {
          $('.top-bar-dropdown').not(this).removeClass('active');
          if ($(event.target).parent().parent().attr('class') == 'options' ) {
            hideDD();
          } else {
            if($(this).hasClass('active') &&  $(event.target).is( "span" )) {
              hideDD();
            } else {
              $(this).toggleClass('active');
            }
          }
          event.stopPropagation();
        });

        $(document).click(function() { hideDD(); });

        $('ul.options li').click(function() {
          var opt = $(this);
          var text = opt.text();
          $('.top-bar-dropdown.active span').text(text);
          hideDD();
        });

        function hideDD(){
          $('.top-bar-dropdown').removeClass('active');
        }
      }
    }
  });
