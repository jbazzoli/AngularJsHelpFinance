(function () {
  'use strict';

  angular.module("myApp")
    .controller("CreditController", creditController);
  creditController.inject = ['$rootScope', '$filter'];


  function creditController($rootScope, $filter, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;

    vm.user = $rootScope.loggedUser;
    vm.category = ["Salary", "Rent", "Others"];
    vm.value = '';
    vm.credit = [];
    vm.countId = 1;
    vm.creditModel = {
      id: 0,
      description: '',
      value: '',
      category: ''
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
      vm.creditModel.description = vm.description;

      vm.creditModel.value = $filter('currency')(vm.value, '€');
      vm.creditModel.category = vm.selectedCategory;
      vm.creditModel.id = vm.countId++;
      vm.credit.push(angular.copy(vm.creditModel));
      vm.clear();


    }


  }
})();