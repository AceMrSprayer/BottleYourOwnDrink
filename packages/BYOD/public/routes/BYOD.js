'use strict';

angular.module('mean.BYOD').config(['$meanStateProvider',
  function($meanStateProvider) {
    $meanStateProvider.state('BYOD example page', {
      url: '/BYOD',
      templateUrl: 'BYOD/views/index.html'
    });
  }
]);

angular.module('mean.BYOD').config(['$meanStateProvider',
    function($meanStateProvider) {
        $meanStateProvider.state('Payment page', {
            url: '/betaling/:userID',
            templateUrl: 'BYOD/views/payment.html'
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
