import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Categories} from '/imports/api/categories';

import template from './categoryList.html';



class CategoryList {
  constructor($reactive, $scope){
    'ngInject';
    $reactive(this).attach($scope);
    this.helpers({
      categories: ()=> Categories.find({})
    });
    this.subscribe('categories');
  }
  edit(category){
    // Todo
    console.log(`Edit ${category}`);
  }
  remove(category){
    Categories.remove({"_id":category._id}, (err)=>{
      if (err) {
        console.log(err);
      }else{
        console.log(`Removed`);
      }
    });
  }
}

const name = 'categoryList';
export default angular.module(name, [
  angularMeteor
])
.component(name,{
  templateUrl: `imports/components/${name}/${name}.html`,
  controller: CategoryList,
  controllerAs: name
});
