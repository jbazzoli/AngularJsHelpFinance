
(function () {
  'use strict';
  angular.module("myApp").directive('editModal', function () {

    return {
      restrict: 'E',
      transclude: true,
      scope: {
        showModal: '=',
        item: '=',
        edit: '='
      },
      templateUrl: '../view/modalEdit.html',
      link: function (scope, element, attrs) {
        scope.modalText = "Click to dismiss";

        scope.modalClicked = function () {
          scope.showModal = false;
        }
        scope.onclickSubmit = function (){
          console.log('teste');
           scope.edit(scope.item);
        }
      }
    }
  })
})();