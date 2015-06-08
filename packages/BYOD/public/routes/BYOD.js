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

      $meanStateProvider.state('BYOD bottle page 3', {
          url: '/bottle3',
          templateUrl: 'BYOD/views/bottle3.html'
      });

      $meanStateProvider.state('BYOD bottle page 4', {
          url: '/bottle4',
          templateUrl: 'BYOD/views/bottle4.html'
      });

      $meanStateProvider.state('test', {
          url: '/test',
          templateUrl: 'BYOD/views/test.html'
      });

      $meanStateProvider.state('page-home', {
          url: '/page-home',
          templateUrl: 'BYOD/views/page-index.html',
          controller: 'mainController'
      });

      $meanStateProvider.state('page-about', {
          url: '/page-about',
          templateUrl: 'BYOD/views/page-about.html',
          controller: 'aboutController'
      });

      $meanStateProvider.state('page-contact', {
          url: '/page-contact',
          templateUrl: 'BYOD/views/page-contact.html',
          controller: 'contactController'
      });



  }
]);
