'use strict';

angular.module('mean.BYOD').config(['$meanStateProvider',
    function ($meanStateProvider) {

        //TODO change below routes to final routes
        $meanStateProvider.state('Home page', {
            url: '/home',
            templateUrl: 'BYOD/views/index.html'
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
        $meanStateProvider.state('bottle step 4', {
            url: '/bottle4',
            templateUrl: 'BYOD/views/bottle4.html'
        });

    }
]);

angular.module('mean.BYOD').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider.state('Payment confirmation page Paypal', {
            url: '/payment/:userID/confirmation-paypal',
            templateUrl: 'BYOD/views/confirmationPaypal.html'
        });
    }
]);

angular.module('mean.BYOD').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider.state('Payment confirmation page Ideal', {
            url: '/payment/:userID/confirmation-ideal',
            templateUrl: 'BYOD/views/confirmationIdeal.html'
        });
    }
]);

angular.module('mean.BYOD').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider.state('Payment confirmation page Coupon', {
            url: '/payment/:userID/confirmation-coupon',
            templateUrl: 'BYOD/views/confirmationCoupon.html'
        });
    }
]);

angular.module('mean.BYOD').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider.state('Payment confirmation page Credit', {
            url: '/payment/:userID/confirmation-credit',
            templateUrl: 'BYOD/views/confirmationCredit.html'
        });
    }
]);
