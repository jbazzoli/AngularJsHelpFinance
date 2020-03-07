(function () {
  'use strict';

  angular.module("myApp")
    .controller("DebitController", debitController);
  debitController.inject = ['$rootScope', '$filter', 'debitInitial', 'RestService'];

  function debitController($rootScope, $filter, debitInitial, RestService, DTOptionsBuilder) {

    var vm = this;
    vm.endpoint = 'debit';
    vm.user = $rootScope.loggedUser;
    vm.category = [{ id: 1, label: "Car" }, { id: 2, label: "House" }, { id: 3, label: "Others" }];
    vm.value = '';
    vm.debitTable = [];
    vm.countId = 1;

    vm.debitModel = {
      //  id: 0,
      description: '',
      value: '',
      category: ''
    }

    vm.init = function () {

      vm.debitTable = debitInitial;
    }

   
  
    vm.modal= {
      show: false,
      item: []
    };
    
    vm.buttonClicked = function ( item) {
     
       vm.modal.show = true;
       vm.modal.item = item;
       
    };

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
   
    vm.updatedCallBack = function () {
      RestService.get(vm.endpoint).then(resp =>  {
        if (resp) {
          vm.debitTable = resp;
        }
      });
    }
    // dizendo que foi atualizado
    vm.onclickDelete = function (item) {
      RestService.del(vm.endpoint, item).then(resp => {
        vm.updatedCallBack();
      });
    }
    // fazer uma modal ou diretiva
    vm.onclickEdit = function (item) {
      RestService.put(vm.endpoint, item).then(resp =>  {
        vm.updatedCallBack();
      });
    }

    vm.onclickSubmit = function () {
      vm.debitModel.description = vm.description;

      vm.debitModel.value = vm.value;
      vm.debitModel.category = vm.selectedCategory.id;
      RestService.post(vm.endpoint, vm.debitModel).then(res =>  {
        console.log('postado',res);
        vm.updatedCallBack();
      });

      vm.clear();
    }

    vm.init();
  }
})();