var app = angular.module('myapp', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/login', { templateUrl: '/views/login/login.html' })
    .when('/home', { templateUrl: '/views/home/home.html' })
    .when('/feedback', { templateUrl: '/views/feedback/feedback.html' })
    .when('/message', { templateUrl: '/components/message/message.html' })
    .otherwise({ templateUrl: '/views/login/login.html' })
})
