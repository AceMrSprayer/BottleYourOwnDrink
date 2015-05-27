'use strict';

angular.module('mean.BYOD').factory('BYODservice', function () {
    var bottle = [];

    return {
        saveBottle:function (data) {
            bottle = data;
        },
        getBottle:function () {
            return bottle;
        }
    };
});
