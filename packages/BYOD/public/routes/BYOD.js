'use strict';

angular.module('mean.BYOD').config(['$meanStateProvider',
  function($meanStateProvider) {
    $meanStateProvider.state('BYOD example page', {
      url: '/BYOD',
      templateUrl: 'BYOD/views/index.html'
    });
  }
]);
