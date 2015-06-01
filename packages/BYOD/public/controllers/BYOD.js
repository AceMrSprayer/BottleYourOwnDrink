'use strict';

angular.module('mean.BYOD')
	.controller('BYODController', ['$scope', 'Global',
	  function($scope, Global) {
// Original scaffolded code.
      $scope.global = Global;
      $scope.package = {
        name: 'BYOD'
      };
    }
  ]);

angular.module('mean.BYOD')
    .controller('mainController',
    function($scope) {
    $scope.pageClass = 'page-home';
});

angular.module('mean.BYOD')
    .controller('aboutController',
    function($scope) {
    $scope.pageClass = 'page-about';
});

angular.module('mean.BYOD')
    .controller('contactController',
    function($scope) {
    $scope.pageClass = 'page-contact';
});
