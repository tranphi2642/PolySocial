var app = angular.module('myapp', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when(
      '/login',
      { templateUrl: './views/login/login.html' },
      { controller: 'loginCtrl' },
    )
    .when(
      '/info',
      { templateUrl: './views/info/info.html' },
      { controller: 'infoCtrl' },
    )
    .when(
      '/home',
      { templateUrl: './views/home/home.html' },
      { controller: 'homeCtrl' },
    )
    .when(
      '/profile',
      { templateUrl: './views/profile/profile.html' },
      { controller: 'profileCtrl' },
    )
    .when(
      '/message',
      { templateUrl: './components/message/message.html' },
      { controller: 'messageCtrl' },
    )
    .when(
      '/page',
      { templateUrl: './views/page/page.html' },
      { controller: 'pageCtrl' },
    )
    .when(
      '/pageDetails',
      { templateUrl: './views/pageDetails/pageDetails.html' },
      { controller: 'pageCtrl' },
    )
    .when(
      '/pagePeoples',
      { templateUrl: './views/pagePeoples/pagePeoples.html' },
      { controller: 'pageCtrl' },
    )
    .when(
      '/quizs',
      { templateUrl: './views/quizs/quizs.html' },
      { controller: 'pageCtrl' },
    )
    .when(
      '/feedback',
      { templateUrl: './views/feedback/feedback.html' },
      { controller: 'feedbackCtrl' },
    )
    .when(
      '/exercises',
      { templateUrl: './views/exercises/exercises.html' },
      { controller: 'exercisesCtrl' },
    )
    .when(
      '/deadlines',
      { templateUrl: './views/deadlines/deadlines.html' },
      { controller: 'deadlinesCtrl' },
    )
    .when(
      '/exerciseDetails',
      { templateUrl: './views/exerciseDetails/exerciseDetails.html' },
      { controller: 'exerciseDetailsCtrl' },
    )
    .when(
      '/editProfile',
      { templateUrl: './views/editProfile/editProfile.html' },
      { controller: 'editProfileCtrl' },
    )
    .when(
      '/teacher',
      { templateUrl: './views/teacher/home/home.html' },
      { controller: 'teacherCtrl' },
    )
    .when(
      '/admin',
      { templateUrl: './views/admin/home/home.html' },
      { controller: 'adminCtrl' },
    )
    .when(
      '/groups',
      { templateUrl: './views/admin/groups/groups.html' },
      { controller: 'groupCrtl' },
    )
    .when(
      '/groupDetails',
      { templateUrl: './views/admin/groupDetails/groupDetails.html' },
      { controller: 'groupCrtl' },
    )
    .when(
      '/contents',
      { templateUrl: './views/admin/contents/contents.html' },
      { controller: 'contentCrtl' },
    )
    .when(
      '/revenus',
      { templateUrl: './views/admin/revenus/revenus.html' },
      { controller: 'revenusCtrl' },
    )
    .when(
      '/accounts',
      { templateUrl: './views/admin/accounts/accounts.html' },
      { controller: 'accountCtrl' },
    )
    .when(
      '/likes',
      { templateUrl: './views/admin/likes/likes.html' },
      { controller: 'likesCtrl' },
    )
    .when(
      '/comments',
      { templateUrl: './views/admin/comments/comments.html' },
      { controller: 'commentCtrl' },
    )
    .otherwise(
      { templateUrl: './views/login/login.html' },
      { controller: 'loginCtrl' },
    )
})
