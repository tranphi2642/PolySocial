var app = angular.module('myapp', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '/views/login/login.html',
    })
    .otherwise({ templateUrl: '/views/login/login.html' })
})

app.controller('myCtrl', function ($scope) {
  window.onload = function () {
    const pwShowHide = document.querySelectorAll('.eye-icon')
    pwShowHide.forEach((eyeIcon) => {
      eyeIcon.addEventListener('click', () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(
          '.password',
        )

        pwFields.forEach((password) => {
          if (password.type === 'password') {
            password.type = 'text'
            eyeIcon.classList.replace('uil-eye-slash', 'uil-eye')
            return
          }
          password.type = 'password'
          eyeIcon.classList.replace('uil-eye', 'uil-eye-slash')
        })
      })
    })
  }
})
