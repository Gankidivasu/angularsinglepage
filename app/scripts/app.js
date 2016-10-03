'use strict';

angular.module('vasuapp', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/contactus',{templateUrl:'./contactus.html', controller:'ContactController'})
            // route for menu page
            .when('/app/menu',{templateUrl:'./menu.html', controller:'MenuController'})
            // route for dish details page
            .when('/menu/:id',{templateUrl:'./dishdetail.html', controller:'dishDetailController'})
            .when('/',{ templateUrl:'./home.html', controller:'IndexController'})
            .when('/aboutus', {templateUrl:'./aboutus.html' , controller: 'AboutController'})
            .otherwise('/');
    })
