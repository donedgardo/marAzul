import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './footer.html';


class FooterCtrl {
}

export default angular.module('footerMain', [
  angularMeteor
])
.directive('footerMain', function(){
  return{
    templateUrl: 'imports/components/footerMain/footer.html',
    controller: FooterCtrl,
    link: function(scope, elem, attrs){
    }
  }
});
