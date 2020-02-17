(function () {
    'use strict';
  
    angular.module("myApp")
      .controller("CreditController", creditController);
    creditController.inject = ['$scope', '$rootScope'];
  
  
  
  
    function creditController($scope, $rootScope) {
      $scope.user = $rootScope.loggedUser;
      $scope.category = ["Salary", "Rent", "Others"];
      $scope.credit = [];
      $scope.creditModel = {
          description: '',
          value: '',
          category: ''
      }
      $scope.onchange = function (){
        console.log($scope.selectedCategory);
      }
      $scope.clear = function (){
        $scope.description = '';
        $scope.value = '';
        $scope.selectedCategory = '';

      }
      $scope.onclickSubmit  = function(){
        $scope.creditModel.description = $scope.description;
        $scope.creditModel.value = $scope.value;
        $scope.creditModel.category = $scope.selectedCategory;
        console.log($scope.credit);
        $scope.credit.push(angular.copy($scope.creditModel));
        $scope.clear();
      }

     
    }
  })();