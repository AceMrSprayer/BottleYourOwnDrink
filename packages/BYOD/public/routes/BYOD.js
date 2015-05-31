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
            url: '/payment/:userID',
            templateUrl: 'BYOD/views/payment.html'
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
