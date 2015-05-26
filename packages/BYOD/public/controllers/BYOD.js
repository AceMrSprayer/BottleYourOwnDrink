'use strict';

angular.module('mean.BYOD')
    .controller('BYODController', ['$scope', 'Global', function ($scope, Global) {
        $scope.global = Global;
    }
    ])
    .controller('BYODControllerStep1', ['$scope', 'Global', 'BYODservice', function ($scope, Global, BYODservice) {
        $scope.global = Global;

        $scope.bottles = [{
            'name': 'X-02',
            'image': '/BYOD/assets/img/bottle1.PNG',
            'material': 'Plastic',
            'cap_colour': 'default',
            'base_colour': 'red',
            'bottom_colour': 'default',
            'base_text': ''
        }, {
            'name': 'Energizer',
            'image': '/BYOD/assets/img/bottle2.PNG',
            'material': 'Metal',
            'cap_colour': 'default',
            'base_colour': 'black',
            'bottom_colour': 'default',
            'base_text': ''
        }, {
            'name': 'Berserker',
            'image': '/BYOD/assets/img/bottle3.PNG',
            'material': 'Metal',
            'cap_colour': 'default',
            'base_colour': 'white',
            'bottom_colour': 'default',
            'base_text': ''
        }];

        $scope.selection = function (bottle) {
            if (event.currentTarget.id !== null) {

                var currentElement = document.getElementById(event.currentTarget.id);

                if (currentElement.className === 'deselected' && !$('img').hasClass('selected')) {
                    currentElement.className = 'selected';
                    currentElement.style.border = 'thin solid black';
                    BYODservice.saveBottle(bottle);
                }
                else {
                    currentElement.className = 'deselected';
                    currentElement.style.removeProperty('border');
                }

            }
        };
    }
    ])
    .controller('BYODControllerStep2', ['$scope', 'Global', 'BYODservice', function ($scope, Global, BYODservice) {
        $scope.global = Global;

        var canvas = new fabric.Canvas('canvas');

        $scope.retrievePickedBottle = function () {
            $scope.bottle = BYODservice.getBottle();
            fabric.Image.fromURL($scope.bottle.image, function(oImg) {
                oImg.set('selectable', false); // make object unselectable
                oImg.set( {width: 500, height: 400} );
                canvas.add(oImg);
            });
            //console.log("retrieve saved bottle" + BYODservice.getBottle().material);
        };

        $scope.changeColour = function (colour) {
            console.log(colour);
            document.getElementsByTagName('p')[0].style.color = colour;
            canvas.renderAll();
        };

    }
    ]);
