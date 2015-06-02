'use strict';

angular.module('mean.BYOD').factory('BYODservice', function () {
    var bottle = {}, order;

    return {
        saveBottle:function (data) {
            bottle = data;
        },
        getBottle:function () {
            return bottle;
        },
        saveOrder:function (data) {
            order = data;
        },
        getOrder:function () {
            return order;
        }
    };
});
