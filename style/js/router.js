var app = angular.module('myapp', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/login', { templateUrl: '/views/login/login.html' })
    .otherwise({ templateUrl: '/views/login/login.html' })
})
