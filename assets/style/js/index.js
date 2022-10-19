var app = angular.module('myapp', ['ngRoute', 'angularCSS'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: './views/login/login.html',
      controller: 'loginCtrl',
      css: {
        href: './assets/style/css/login.css',
      },
    })
    .when('/info', {
      templateUrl: './views/info/info.html',
      controller: 'infoCtrl',
      css: {
        href: './assets/style/css/profile.css',
      },
    })
    .when('/home', {
      templateUrl: './views/home/home.html',
      controller: 'homeCtrl',
      css: {
        href: './assets/style/css/home.css',
      },
    })
    .when('/profile', {
      templateUrl: './views/profile/profile.html',
      controller: 'profileCtrl',
      css: {
        href: './assets/style/css/profile.css',
      },
    })
    .when('/message', {
      templateUrl: './components/message/message.html',
      controller: 'messageCtrl',
      css: {
        href: './assets/style/css/message.css',
      },
    })
    .when('/page', {
      templateUrl: './views/page/page.html',
      controller: 'pageCtrl',
      css: {
        href: './assets/style/css/page.css',
      },
    })
    .when('/pageDetails', {
      templateUrl: './views/pageDetails/pageDetails.html',
      controller: 'pageCtrl',
      css: {
        href: './assets/style/css/page.css',
      },
    })
    .when('/pagePeoples', {
      templateUrl: './views/pagePeoples/pagePeoples.html',
      controller: 'pageCtrl',
      css: {
        href: './assets/style/css/page.css',
      },
    })
    .when('/pageQuizs', {
      templateUrl: './views/pageQuizs/pageQuizs.html',
      controller: 'pageCtrl',
      css: {
        href: './assets/style/css/page.css',
      },
    })
    .when('/pageQuizsDetails', {
      templateUrl: './views/pageQuizsDetails/pageQuizsDetails.html',
      controller: 'pageCtrl',
      css: {
        href: './assets/style/css/page.css',
      },
    })
    .when('/feedback', {
      templateUrl: './views/feedback/feedback.html',
      controller: 'feedbackCtrl',
      css: {
        href: './assets/style/css/feedback.css',
      },
    })
    .when('/editProfile', {
      templateUrl: './views/editProfile/editProfile.html',
      controller: 'editProfileCtrl',
      css: {
        href: './assets/style/css/profile.css',
      },
    })
    .when(
      '/teacher',
      { templateUrl: './views/teacher/home/home.html' },
      { controller: 'teacherCtrl' },
    )
    .when('/admin', {
      templateUrl: './views/admin/home/home.html',
      controller: 'adminCtrl',
      css: {
        href: './assets/style/admin/css/home.css',
      },
    })
    .when('/groups', {
      templateUrl: './views/admin/groups/groups.html',
      controller: 'groupCrtl',
      css: {
        href: './assets/style/admin/css/likes.css',
      },
    })
    .when('/groupDetails', {
      templateUrl: './views/admin/groupDetails/groupDetails.html',
      controller: 'groupCrtl',
      css: {
        href: './assets/style/admin/css/likes.css',
      },
    })
    .when('/contents', {
      templateUrl: './views/admin/contents/contents.html',
      controller: 'contentCrtl',
      css: {
        href: './assets/style/admin/css/likes.css',
      },
    })
    .when('/revenus', {
      templateUrl: './views/admin/revenus/revenus.html',
      controller: 'revenusCtrl',
      css: {
        href: './assets/style/admin/css/revenus.css',
      },
    })
    .when('/accounts', {
      templateUrl: './views/admin/accounts/accounts.html',
      controller: 'accountCtrl',
      css: {
        href: './assets/style/admin/css/likes.css',
      },
    })
    .when('/likes', {
      templateUrl: './views/admin/likes/likes.html',
      controller: 'likesCtrl',
      css: {
        href: './assets/style/admin/css/likes.css',
      },
    })
    .when('/comments', {
      templateUrl: './views/admin/comments/comments.html',
      controller: 'commentCtrl',
      css: {
        href: './assets/style/admin/css/likes.css',
      },
    })
    .otherwise({ redirectTo: '/login' })
})
