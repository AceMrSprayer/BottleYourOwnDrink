'use strict';

angular.module('mean.BYOD').config(['$meanStateProvider',
  function($meanStateProvider) {

    $meanStateProvider.state('BYOD example page', {
      url: '/BYOD',
      templateUrl: 'BYOD/views/index.html'
    });

      $meanStateProvider.state('BYOD bottle page 1', {
          url: '/bottle1',
          templateUrl: 'BYOD/views/bottle1.html'
      });

      $meanStateProvider.state('BYOD bottle page 2', {
          url: '/bottle2',
          templateUrl: 'BYOD/views/bottle2.html'
      });
  }
]);
