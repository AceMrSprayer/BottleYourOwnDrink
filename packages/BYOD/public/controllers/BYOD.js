'use strict';

angular.module('mean.BYOD')
    .controller('BYODController', ['$scope', 'Global', function ($scope, Global) {
// Original scaffolded code.
        $scope.global = Global;
        $scope.package = {
            name: 'BYOD'
        };
    }
    ])
    .controller('BYODControllerStep1', ['$scope', 'Global', function ($scope, Global) {
// Original scaffolded code.
        $scope.global = Global;
        $scope.package = {
            name: 'BYOD'
        };

        $scope.bottles = [
            {
                'name': 'X-02',
                'image': '/BYOD/assets/img/bottle1.PNG',
                'description': '250ml',
                'material': 'Plastic'
            },
            {
                'name': 'Energizer',
                'image': '/BYOD/assets/img/bottle2.PNG',
                'description': '500ml',
                'material': 'Metal'
            },
            {
                'name': 'Berserker',
                'image': '/BYOD/assets/img/bottle3.PNG',
                'description': '1000ml',
                'material': 'Metal'
            }
        ];

        $scope.bottles.isClicked = function (event) {
            if (event.currentTarget.id !== null) {
                var currentElement = document.getElementById(event.currentTarget.id);

                if (currentElement.className === 'deselected'  && !$('img').hasClass('selected')) {
                    currentElement.className = 'selected';
                    currentElement.style.border = 'thin solid #000000';
                }
                else{
                    currentElement.className = 'deselected';
                    currentElement.style.removeProperty('border');
                }
            }
        };
    }
    ])
    .controller('BYODControllerStep2', ['$scope', 'Global', function ($scope, Global) {
// Original scaffolded code.
        $scope.global = Global;
        $scope.package = {
            name: 'BYOD'
        };
    }
    ]);
