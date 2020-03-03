app.directive('editModal', function () {
  
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        showModal: '='
      },
      template: "<div class='modal-backdrop' ng-show='showModal'></div>" +
        "<div class='modal' ng-show='showModal'>" +
           "<h1 ng-click='modalClicked()'>{{modalText}}</h1>" +
        "</div>",
      link: function (scope, element, attrs) {
        scope.modalText = "Click to dismiss";
        
        scope.modalClicked = function () {
          scope.showModal = false;
        }
      }
    }
  });