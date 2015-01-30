'use strict';

/**
 * Main module.
 */
angular.module('excelApp', ['ngResource', 'ngRoute', 'mainNavList','lr.upload']).config(
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'uploads/upload-file.html',
            controller: 'UploadFileCtrl'
        }).when('/view-files', {
            templateUrl: 'view-files/view-files.html',
            controller: 'ViewFilesCtrl'
        }).when('/login', {
            templateUrl: 'login/login.html',
            controller: 'LoginController',
        }).otherwise({
            redirectTo: '/'
        });
    });