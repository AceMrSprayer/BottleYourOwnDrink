'use strict';

angular.module('mean.BYOD')
    .controller('BYODController', ['$scope', 'Global', function ($scope, Global) {
        $scope.global = Global;
    }
    ])
    .controller('BYODControllerStep1', ['$scope', 'Global', 'BYODservice', function ($scope, Global, BYODservice) {
        $scope.global = Global;

        /**
         * Here are our predifined bottles stored
         * TODO: Making use of variables like this is quite ugly move it else where.
         * @type {{name: string, image: string, material: string, cap_colour: string, base_colour: string, bottom_colour: string, base_text: string}[]}
         */
        $scope.bottles = [
            {
            'name': 'X-02',
            'image': '/BYOD/assets/img/bottle/bottle1.PNG',
            'imageTop': '/BYOD/assets/img/bottle/bottleTop1.PNG',
            'imageBase': '/BYOD/assets/img/bottle/bottleBase1.PNG',
            'imageBottom': '/BYOD/assets/img/bottle/bottleBottom1.PNG'
            },
            {
            'name': 'Energizer',
            'image': '/BYOD/assets/img/bottle/bottle1.PNG',
            'imageTop': '/BYOD/assets/img/bottle/bottleTop1.PNG',
            'imageBase': '/BYOD/assets/img/bottle/bottleBase1.PNG',
            'imageBottom': '/BYOD/assets/img/bottle/bottleBottom1.PNG'
            },
            {
            'name': 'Berserker',
            'image': '/BYOD/assets/img/bottle/bottle1.PNG',
            'imageTop': '/BYOD/assets/img/bottle/bottleTop1.PNG',
            'imageBase': '/BYOD/assets/img/bottle/bottleBase1.PNG',
            'imageBottom': '/BYOD/assets/img/bottle/bottleBottom1.PNG'
            }
        ];

        /**
         * This function will handle the selection of the bottles in step 1 of BYOD.
         * TODO: Optimize this function && Make it possible to select another bottle so that it switches from previous selection to the new one
         * @param bottle
         */
        $scope.selection = function (bottle) {
            var currentElement = document.getElementById(event.currentTarget.id);

            if (currentElement.className === 'deselected' && !$('img').hasClass('selected')) {
                currentElement.className = 'selected';
                currentElement.style.border = 'thin solid black';
                // Save bottle from this step in the BYOD service
                BYODservice.saveBottle(bottle);
            }
            else {
                currentElement.className = 'deselected';
                currentElement.style.removeProperty('border');
            }


        };
    }
    ])
    .controller('BYODControllerStep2', ['$scope', 'Global', 'BYODservice', function ($scope, Global, BYODservice) {
        $scope.global = Global;

        /**
         * The variables of this controller
         */
        var text, imageSaver, imageLoader, canvas = new fabric.Canvas('canvas');

        /**
         * A function to retrieve the bottle saved in step 1 from BYOD service.
         */
        $scope.retrievePickedBottle = function () {
            $scope.bottle = BYODservice.getBottle();
            //add bottle top to canvas
            fabric.Image.fromURL($scope.bottle.imageTop, function (oImg) {
                oImg.set('selectable', false); // make object unselectable
                oImg.set({width: 140, height: 85});
                canvas.add(oImg);
            });
            //add bottle base to canvas
            fabric.Image.fromURL($scope.bottle.imageBase, function (oImg) {
                oImg.set('selectable', false); // make object unselectable
                oImg.set({top: 78, width: 140, height: 360});
                canvas.add(oImg);
            });
            //add bottle bottom to canvas
            fabric.Image.fromURL($scope.bottle.imageBottom, function (oImg) {
                oImg.set('selectable', false); // make object unselectable
                oImg.set({top: 429, width: 140, height: 35});
                canvas.add(oImg);
            });
        };

        /**
         * A function to change to colour of the bottle
         * @param colour
         * @param field
         */
        $scope.changeColour = function (colour, field) {
            canvas.item(field).filters.pop();
            canvas.item(field).filters.push(new fabric.Image.filters.Blend({color: colour}));
            canvas.item(field).applyFilters(canvas.renderAll.bind(canvas));
            canvas.renderAll();
        };

        /**
         * Function to add text to the bottle on the canvas
         * TODO: Will always remove the second object of the canvas make this dynamic if possible
         * @param filledText
         */
        $scope.addText = function (filledText) {
            text = new fabric.Text(filledText, {left: 150, top: 100});
            if (canvas.item(canvas.getObjects().length-1) instanceof fabric.Text) {
                console.log('removing object.....' + canvas.item(canvas.getObjects().length-1));
                canvas.remove(canvas.item(canvas.getObjects().length-1));
                canvas.add(text);
            }
            else {
                canvas.add(text);
            }
            canvas.renderAll();
        };

        /**
         * Function to load image into the canvas this uses FileAPI from W3C
         * @param e
         */
        function handleImage(e) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var img = new Image();
                img.onload = function () {
                    var imgInstance = new fabric.Image(img, {
                        scaleX: 0.1,
                        scaleY: 0.1
                    });
                    canvas.add(imgInstance);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }

        imageLoader = document.getElementById('imageLoader');
        imageLoader.addEventListener('change', handleImage, false);


        /**
         * Function to save the canvas as an image to your computer.
         *
         */
        var saveImage = function () {
            this.href = canvas.toDataURL({
                format: 'png',
                quality: 2.0
            });
            this.download = 'default.png';
        };
        imageSaver = document.getElementById('imageSaver');
        imageSaver.addEventListener('click', saveImage, false);

        //fix function to create an order and save it to the database
        $scope.createOrder = function () {
            console.log(canvas.toObject());
        };
    }
    ])
    .controller('BYODControllerStep3', ['$scope', 'Global', 'BYODservice', function ($scope, Global, BYODservice) {
        $scope.global = Global;

        $scope.fruits = [
            {'imgsrc' : '/BYOD/assets/img/fruit/banana.jpg', 'id': 1, 'name' : 'banana'},
            {'imgsrc' : '/BYOD/assets/img/fruit/apple.jpg', 'id': 2, 'name' : 'apple'},
            {'imgsrc' : '/BYOD/assets/img/fruit/pineapple.jpg', 'id': 3, 'name' : 'pineapple'},
            {'imgsrc' : '/BYOD/assets/img/fruit/strawberry.jpg', 'id': 4, 'name' : 'strawberry'}
        ];
    }

    ])
    .controller('PaymentController', ['$scope', '$rootScope', '$http', '$location', 'Global',
        function ($scope, $rootScope, $http, $location, Global) {
            // Original scaffolded code.
            $scope.global = Global;

            $http.get('/auth/profile/overzicht/' + $scope.global.user._id).success(function (response) {
                console.log('Account informatie is binnen');
                console.dir(response);
                $scope.name = response.name;
                $scope.username = response.username;
                $scope.email = response.email;
            }).error(function () {
                console.log('Account informatie is niet opgehaald.');
            });

            $scope.createNewOrder = function () {
                console.log('User is creating a new order');
                //console.dir($scope.bottle);
                var testBottle = {
                    name: 'testBottle'
                };

                $http.post('/createOrder/' + $scope.global.user._id, {
                    bottle: testBottle
                })
                    .success(function (response) {
                        $scope.message = response.msg;
                        $location.url('/payment/complete/');
                    })
                    .error(function (error) {
                        if(error){
                            console.log(error);
                        }else{
                            console.log('Er is iets fout gegaan bij het maken van de nieuwe bestelling');
                        }
                    });
            };

            //var price = $('#price').val();
            ////count the total sum
            //$('#productAmount').bind('keyup mouseup',function() {
            //    var amount = $('#productAmount').val();
            //    var totalsum = amount * price;
            //    $('#totalsum').val(totalsum);
            //});
            ////Make sure you can select only one method
            //$('.paycheck').on('change', function() {
            //    $('.paycheck').not(this).prop('checked', false);
            //});
            ////validations
            //$('.btn').click(function(e){
            //    e.preventDefault();
            //    var inputs = $('.form-control');
            //    var inputs2 = $('.paycheck');
            //    var terms = $('#terms');
            //    var bad = 0;
            //    var bad2 = 0;
            //    inputs2.each(function(){
            //        if ($(this).prop('checked') == false) bad2++;
            //    });
            //    inputs.each(function(){
            //        if ($.trim(this.value) == "") bad++;
            //    });
            //    if (bad > 0 || $('#terms').prop('checked') == false || bad2 != 3){
            //        alert('Something is missing');
            //    }else{
            //        alert('Everything is filled in');
            //    }
            //});
        }
    ]);

/*Code for going forward*/
//function Forward1() {
//    document.location="BackForward.htm";
//}

