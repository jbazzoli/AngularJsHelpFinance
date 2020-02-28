(function () {
    'use strict';
  
    angular.module("myApp")
      .controller("DebitController", debitController);
      debitController.inject = ['$scope', '$rootScope','debit'];
   // debitController.inject = ['DebitService','$scope', '$rootScope'];
      function debitController($rootScope, $filter, DTOptionsBuilde,debit) {
      //function debitController(DebitService,$rootScope, $filter, DTOptionsBuilde) {
        var vm = this;
    
        vm.user = $rootScope.loggedUser;
        vm.category = ["Car", "House", "Others"];
        vm.value = '';
        vm.debit = [];
        vm.countId = 1;

        vm.debitModel = {
          id: 0,
          description: '',
          value: '',
          category: ''
        }

        // Is posible to put this in route 
        vm.init = function(){
          /* DebitService.get('debit').then(function(response) {
					
            vm.debitModel = response;
            console.log(vm.debitModel);
            vm.debit.push(vm.debitModel[0]);
            
          });*/
          
          vm.debit.push(debit);
        }
    
        vm.dtOptions = DTOptionsBuilder.newOptions()
    
          .withPaginationType('full_numbers')
    
        vm.onchange = function () {
          console.log(vm.selectedCategory);
        }
        vm.clear = function () {
          vm.description = '';
          vm.value = '';
          vm.selectedCategory = '';
    
        }
    
        vm.onclickDelete = function (id) {
    
          console.log(id);
        }
        vm.onclickEdit = function (id) {
          console.log(id);
        }
    
    
        vm.onclickSubmit = function () {
          vm.clear();
          vm.debitModel.description = vm.description;
    
          vm.debitModel.value = $filter('currency')(vm.value, '€');
          vm.debitModel.category = vm.selectedCategory;
          vm.debitModel.id = vm.countId++;
          vm.debit.push(angular.copy(vm.debitModel));
          vm.clear();
    
    
        }
    
        vm.init();
      }
  })();