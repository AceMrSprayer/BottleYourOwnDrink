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

        //PAYMENT ROUTES

        $meanStateProvider.state('Payment page', {
            url: '/betaling/:userID',
            templateUrl: 'BYOD/views/payment.html'
        });
        $meanStateProvider.state('payment completion page', {
            url: '/payment/complete',
            templateUrl: 'BYOD/views/confirmationIdeal.html'
        });



        //FINAL ROUTES FOR THE BYOD FUNCTIONALITY

        $meanStateProvider.state('Bottle step 1', {
            url: '/choose/option',
            templateUrl: 'BYOD/views/bottle1.html'
        });
        $meanStateProvider.state('Bottle step 2', {
            url: '/choose/bottle',
            templateUrl: 'BYOD/views/bottle2.html'
        });
        $meanStateProvider.state('Bottle step 3', {
            url: '/create/bottle',
            templateUrl: 'BYOD/views/bottle3.html'
        });
        $meanStateProvider.state('bottle step 4', {
            url: '/create/drink',
            templateUrl: 'BYOD/views/bottle4.html'
        });

    }
]);

angular.module('mean.BYOD').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider.state('Payment confirmation page Paypal', {
            url: '/betaling/:userID/confirmatie-paypal',
            templateUrl: 'BYOD/views/confirmationPaypal.html'
        });
    }
]);

angular.module('mean.BYOD').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider.state('Payment confirmation page Ideal', {
            url: '/betaling/:userID/confirmatie-ideal',
            templateUrl: 'BYOD/views/confirmationIdeal.html'
        });
    }
]);

angular.module('mean.BYOD').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider.state('Payment confirmation page Coupon', {
            url: '/betaling/:userID/confirmatie-coupon',
            templateUrl: 'BYOD/views/confirmationCoupon.html'
        });
    }
]);

angular.module('mean.BYOD').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider.state('Payment confirmation page Credit', {
            url: '/betaling/:userID/confirmatie-credit',
            templateUrl: 'BYOD/views/confirmationCredit.html'
        });
    }
]);
