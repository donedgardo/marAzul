import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './articleCarousel.html';
import '/public/scripts/hammer.min.js';
import 'jquery-hammerjs';
import '/public/scripts/jquery.themepunch.plugins.min.js';
import '/public/scripts/jquery.themepunch.showbizpro.min.js';



class ArticleCarousel {
}

export default angular.module('articleCarousel', [
  angularMeteor
])
.directive('articleCarousel', function(){
  return{
    templateUrl: 'imports/components/articleCarousel/articleCarousel.html',
    controller: ArticleCarousel,
    link: function(scope, elem, attrs){
    }
  }
});
