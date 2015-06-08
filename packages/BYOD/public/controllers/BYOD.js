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
            var link = '';
            var linkToConfirmation = location.origin+'#!/betaling/'+$scope.global.user._id;
            $scope.entities = [{
                name: 'one',
                data: ('link', '/confirmatie-paypal'),
                label: 'Paypal',
                checked: false
            }, {
                name: 'two',
                data: ('link', '/confirmatie-credit'),
                label: 'Credit card',
                checked: false
            }, {
                name: 'three',
                data: ('link', '/confirmatie-ideal'),
                label: 'Ideal',
                checked: false
            }, {
                name: 'four',
                data: ('link', '/confirmatie-coupon'),
                label: 'Coupon',
                checked: false
            }
            ];
            //function for letting only one checkbox be checked
            $scope.updateSelection = function(position, entities, obj) {
                link = obj.target.attributes.data.value;
                angular.forEach(entities, function(subscription, index) {
                    if (position !== index)
                        subscription.checked = false;
                });
            };
            //function for checking if any checkbxes are checked
            $scope.checked = function() {
                for(var e in $scope.entities) {
                    var checkBox = $scope.entities[e];
                    if(checkBox.checked)
                        return true;
                }
                return false;
            };
            //validate zip code dutch style
            $scope.zipPattern = (function() {
                var regexp = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/;
                return {
                    test: function(value) {
                        if( $scope.requireZip === false ) {
                            return true;
                        }
                        return regexp.test(value);
                    }
                };
            })();
            //If the form is valid open the link to confirmation page
            $scope.submitForm = function(isValid) {
                // check to make sure the form is completely valid
                if (isValid) {
                    window.open(linkToConfirmation+link);
                }

            };
            $(document).ready(function () {
                //Calculate the total price and add it to the totalsum element
                var price = $('#price').val();
                $('#productAmount').bind('keyup mouseup', function () {
                    var amount = $('#productAmount').val();
                    var totalsum = amount * price;
                    $('#totalsum').val(totalsum);
                });
            });

             //   var firstName = fullName.split(' ').slice(0, -1).join(' ');
             //  var lastName = fullName.split(' ').slice(-1).join(' ');

        $http.get('/auth/profile/overzicht/' + $scope.global.user._id).success(function (response) {
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
