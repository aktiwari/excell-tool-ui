'use strict';
/**
 *
 */

var navlist = angular.module('mainNavList', []);

navlist.controller('mainNavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || 'upload-file';
        if (currentRoute.match('upload-file')) {
            currentRoute = 'upload-file';
        } else if (currentRoute.match('view-files')) {
            currentRoute = 'view-files';
        }
        return page === currentRoute ? 'active' : '';
    };
}]);