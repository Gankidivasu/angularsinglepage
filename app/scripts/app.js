'use strict';

angular.module('vasuapp', ['ngRoute'])
.config(function($routeProvider){
    $routeProvider
     // route for contactus page
        .when('/contactus',{templateUrl:'./contactus.html', controller:'ContactController'})
     // route for menu page
        .when('/menu',{templateUrl:'./menu.html', controller:'MenuController'})
     // route for dish details page
        .when('/menu/:id',{templateUrl:'./dishdetail.html', controller:'dishDetailController'})
        .otherwise('/contactus');
})