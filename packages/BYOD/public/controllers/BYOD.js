'use strict';

angular.module('mean.BYOD')
	.controller('BYODController', ['$scope', 'Global',
    function($scope, Global) {
// Original scaffolded code.
        $scope.global = Global;
        $scope.pageIndex = 'page-byod';
        $scope.package = {
            name: 'BYOD'
        };
    }
])

    .controller('PaymentController', ['$scope', '$rootScope', '$http', '$location', 'Global',
        function ($scope, $rootScope, $http, $location, Global) {
// Original scaffolded code.
        $scope.global = Global;
        var userID = $scope.global.user._id;

        $http.get('/payment/' + userID).success(function (response) {
            console.log('Account informatie is binnen');
            console.dir(response);
            $scope.name = response.name;
            $scope.username = response.username;
            $scope.email = response.email;
        }).error(function () {
            console.log('Account informatie is niet opgehaald.');
        });
    }
]);