import angular from 'angular';
import angularMeteor from 'angular-meteor';
import topBar from '../imports/components/topBar/top-bar';
import mainHeader from '../imports/components/mainHeader/mainHeader';
import mainNavigation from '../imports/components/mainNavigation/mainNavigation';
import slider from '../imports/components/slider/slider';
import articleCarousel from '../imports/components/articleCarousel/articleCarousel';
import footerMain from '../imports/components/footerMain/footer';

angular.module('marAzulApp', [
  angularMeteor,
  topBar.name,
  mainHeader.name,
  mainNavigation.name,
  slider.name,
  articleCarousel.name,
  footerMain.name
]);
