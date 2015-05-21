'use strict';

angular.module('mean.BYOD')
    .controller('BYODController', ['$scope', 'Global', function ($scope, Global) {
        $scope.global = Global;
    }
    ])
    .controller('BYODControllerStep1', ['$scope', 'Global','BYODservice', function ($scope, Global, BYODservice) {
        $scope.global = Global;

        $scope.bottles = [{
                'name': 'X-02',
                'image': '/BYOD/assets/img/bottle1.PNG',
                'material': 'Plastic',
                'cap_colour': 'default',
                'base_colour': 'default',
                'bottom_colour': 'default',
                'base_text': ''
            },{
                'name': 'Energizer',
                'image': '/BYOD/assets/img/bottle2.PNG',
                'material': 'Metal',
                'cap_colour': 'default',
                'base_colour': 'default',
                'bottom_colour': 'default',
                'base_text': ''
            },{
                'name': 'Berserker',
                'image': '/BYOD/assets/img/bottle3.PNG',
                'material': 'Metal',
                'cap_colour': 'default',
                'base_colour': 'default',
                'bottom_colour': 'default',
                'base_text': ''
            }];

        $scope.isClicked = function (event) {
            if (event.currentTarget.id !== null) {
                BYODservice.saveBottle(event.currentTarget.id);

            /*var currentElement = document.getElementById(event.currentTarget.id);

                if (currentElement.className === 'deselected'  && !$('img').hasClass('selected')) {
                    currentElement.className = 'selected';
                    currentElement.style.border = 'thin solid red';
                }
                else{
                    currentElement.className = 'deselected';
                    currentElement.style.removeProperty('border');
                }*/

            }
        };
    }
    ])
    .controller('BYODControllerStep2', ['$scope', 'Global','BYODservice', function ($scope, Global, BYODservice) {
        $scope.global = Global;
        $scope.retrievePickedBottle = function() {
            $scope.bottle = BYODservice.getBottle();

            console.log(BYODservice.getBottle());
        };

    }
    ]);
