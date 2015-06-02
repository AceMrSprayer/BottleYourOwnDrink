'use strict';

angular.module('mean.BYOD').config(['$meanStateProvider',
    function ($meanStateProvider) {

        //TODO change below routes to final routes
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

        //FINAL ROUTES FOR THE BYOD FUNCTIONALITY

        $meanStateProvider.state('Bottle step 1', {
            url: '/bottle1',
            templateUrl: 'BYOD/views/bottle1.html'
        });
        $meanStateProvider.state('Bottle step 2', {
            url: '/bottle2',
            templateUrl: 'BYOD/views/bottle2.html'
        });
        $meanStateProvider.state('Bottle step 3', {
            url: '/bottle3',
            templateUrl: 'BYOD/views/bottle3.html'
        });

    }
]);
