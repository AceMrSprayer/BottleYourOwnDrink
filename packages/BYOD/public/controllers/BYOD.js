'use strict';

angular.module('mean.BYOD')
	.controller('BYODController', ['$scope', 'Global', 'ngAnimate',
	  function($scope, Global) {
// Original scaffolded code.
      $scope.global = Global;
      $scope.package = {
        name: 'BYOD'
      };
    }
  ])

    .controller('mainController',
    function($scope) {
    $scope.pageClass = 'page-home';
        alert('hey');
})

    .controller('aboutController',
    function($scope) {
    $scope.pageClass = 'page-about';
})

    .controller('contactController',
    function($scope) {
    $scope.pageClass = 'page-contact';
});
