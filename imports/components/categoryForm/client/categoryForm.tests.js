import { name as CategoryForm} from '../categoryForm';
import { Categories } from '../../../api/categories';
import 'angular-mocks';

describe('CategoryForm', ()=> {
  beforeEach(()=>{
    window.module(CategoryForm);
  });

  describe('controller', ()=>{
    let controller;
    const category = {
      name: 'Foo',
      description: 'Foo description'
    };
    beforeEach(()=>{
      inject(($rootScope, $componentController)=>{
        controller = $componentController(CategoryForm, {
          $scope : $rootScope.$new(true)
        });
      });
    });

    describe('submit(category)', ()=>{
      beforeEach(()=>{
        spyOn(Categories, 'insert');
        spyOn(controller, 'reset').and.callThrough();

        controller.category = category;
        controller.submit(category);
      });

      it('should insert a new category', ()=>{
        expect(Categories.insert).toHaveBeenCalledWith(category, (err, data)=>{});
      });

      it('should call reset()', ()=>{
        expect(controller.reset).toHaveBeenCalled();
      });
    });
  });
});
