'use strict';

angular.module('mean.BYOD')
	.controller('BYODController', ['$scope', 'Global',
	  function($scope, Global) {
// Original scaffolded code.
      $scope.global = Global;
      $scope.pageIndex = 'page-byod';
      $scope.package = {
        name: 'BYOD'
      };
    }
  ]);
