import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Categories} from '/imports/api/categories';

import template from './categoryForm.html';



class CategoryForm {
  constructor($reactive, $scope){
    'ngInject';
    $reactive(this).attach($scope);
    this.category = {};
    this.error = null;
    this.saved = false;
  }
  submit(category){
    console.log(category);
    Categories.insert(category, (err, data)=>{
      if(err) {
        console.log(err.toString());
        this.error = err.toString();
      }else{
        console.log(data);
        this.saved = true;
        this.reset();
      }
    });
  }
  reset(){
    this.category = null;
  }
}

const name = 'categoryForm';
export default angular.module(name, [
  angularMeteor
])
.component(name,{
    templateUrl: `imports/components/${name}/${name}.html`,
    controller: CategoryForm,
    controllerAs: name,
});
