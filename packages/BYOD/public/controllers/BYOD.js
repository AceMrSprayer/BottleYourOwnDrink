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
            var price = $('#price').val();
            var datalink = "";
            var linkToConfirmation = "http://localhost:1337/#!/payment/"+$scope.global.user._id;
            //count the total sum
            $('#productAmount').bind('keyup mouseup',function() {
                var amount = $('#productAmount').val();
                var totalsum = amount * price;
                $('#totalsum').val(totalsum);
            });
            //Make sure you can select only one method
            $('.paycheck').on('change', function() {
                $('.paycheck').not(this).prop('checked', false);
                datalink = $(this).data('link');
                linkToConfirmation = linkToConfirmation+"/"+datalink;
            });
            //validations
            $('.btn').click(function(e){
                e.preventDefault();
                var inputs = $('.form-control');
                var inputs2 = $('.paycheck');
                var terms = $('#terms');
                var bad = 0;
                var bad2 = 0;
                inputs2.each(function(){
                    if ($(this).prop('checked') == false) bad2++;
                });
                inputs.each(function(){
                    if ($.trim(this.value) == "") bad++;
                });
                if (bad > 0 || $('#terms').prop('checked') == false || bad2 != 3){
                    alert('Something is missing');
                }else{
                    window.open(linkToConfirmation);
                }
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

/*Code for going forward*/
function Forward1() {
    document.location="BackForward.htm";
}