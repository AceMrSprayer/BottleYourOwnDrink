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
    }
]);
