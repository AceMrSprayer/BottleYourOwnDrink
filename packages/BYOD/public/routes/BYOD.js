'use strict';

angular.module('mean.BYOD').config(['$meanStateProvider',
    function ($meanStateProvider) {
        $meanStateProvider.state('Home page', {
            url: '/home',
            templateUrl: 'BYOD/views/index.html'
        });
        $meanStateProvider.state('pick your bottle', {
            url: '/step1',
            templateUrl: 'BYOD/views/pickBottle.html'
        });
        $meanStateProvider.state('create your bottle', {
            url: '/step2',
            templateUrl: 'BYOD/views/createBottle.html'
        });
        $meanStateProvider.state('Mix your drink', {
            url: '/step3',
            templateUrl: 'BYOD/views/mixDrink.html'
        });
        $meanStateProvider.state('Payment page', {
            url: '/payment/:userID',
            templateUrl: 'BYOD/views/payment.html'
        });

      $meanStateProvider.state('page-home', {
          url: '/page-home',
          templateUrl: 'BYOD/views/page-home.html',
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
