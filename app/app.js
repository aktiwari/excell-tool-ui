'use strict';

/**
 * Main module.
 */
angular.module('excelApp', ['ngResource', 'ngRoute', 'mainNavList']).config(
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'uploads/upload-file.html',
            controller: 'UploadFileCtrl'
        }).when('/view-files', {
            templateUrl: 'view-files/view-files.html',
            controller: 'ViewFilesCtrl'
        }).otherwise({
            redirectTo: '/'
        });
    });