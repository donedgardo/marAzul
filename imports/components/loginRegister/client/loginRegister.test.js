import { name as loginRegister } from '../loginRegister';
import { Meteor } from 'meteor/meteor';

import 'angular-mocks';

describe('loginRegister', () =>{
  beforeEach(()=>{
    window.module(loginRegister);
  });

  describe('controller', () =>{
    let controller;
    const newUser = {
      email : "test@email.com",
      password : "test",
      passwordConfirm : "test"
    };

    beforeEach(()=>{
      inject(($rootScope, $componentController) => {
        controller = $controller(loginRegister, {
          $scope: $rootScope.$new(true)
        });
      });
    })

    describe('register', ()=>{
      it('should register new user with correct credentials', ()=>{
        controller.newUser = newUser;

      })

    })


  })

});
