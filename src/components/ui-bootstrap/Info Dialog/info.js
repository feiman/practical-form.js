(function (pf, undefined) {
  'use strict';
  pf.module.directive('pfInfo', ['$uibModal', function ($uibModal) {
    return {
      restrict: 'A',
      scope: {
        pfTitle: '@',
        pfMessage: '@',
        modalOptions: '=?'
      },
      link: function ($scope, $element) {
        $element.bind('click', function () {
          $scope.modalOptions = $scope.modalOptions || {};
          if (typeof $scope.modalOptions.template !== 'undefined') {
            $scope.modalOptions.templateUrl = $scope.modalOptions.templateUrl || '/jjp/pf/info.html';
          }
          $scope.modalOptions.controller = $scope.modalOptions.controller || 'pfModalCtrl';
          $scope.modalOptions.resolve = {
            params: {
              title: $scope.pfTitle || 'Information',
              message: $scope.pfMessage || 'Here is some more info for you'
            }
          };
          $uibModal.open($scope.modalOptions);
        });
      }
    };
  }]);
}(window.practicalForms));
