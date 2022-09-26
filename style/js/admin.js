var app = angular.module('myadmin', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when(
      '/admin',
      { templateUrl: '/views/admin/home/home.html' },
      { controller: 'adminCtrl' },
    )
    .when(
      '/revenus',
      { templateUrl: '/views/admin/revenus/revenus.html' },
      { controller: 'revenusCtrl' },
    )
    .when(
      '/likes',
      { templateUrl: '/views/admin/likes/likes.html' },
      { controller: 'likesCtrl' },
    )
    .when(
      '/shares',
      { templateUrl: '/views/admin/shares/shares.html' },
      { controller: 'likesCtrl' },
    )
    .when(
      '/comments',
      { templateUrl: '/views/admin/comments/comments.html' },
      { controller: 'likesCtrl' },
    )
    .otherwise(
      { templateUrl: '/views/admin/home/home.html' },
      { controller: 'adminCtrl' },
    )
})

app.controller('adminCtrl', function ($scope) {
  window.onload = function () {
    //admin home
    const body = document.querySelector('body'),
      modeToggle = body.querySelector('.mode-toggle')
    sidebar = body.querySelector('nav')
    sidebarToggle = body.querySelector('.sidebar-toggle')

    let getMode = localStorage.getItem('mode')
    if (getMode && getMode === 'dark') {
      body.classList.toggle('dark')
    }

    let getStatus = localStorage.getItem('status')
    if (getStatus && getStatus === 'close') {
      sidebar.classList.toggle('close')
    }

    modeToggle.addEventListener('click', () => {
      body.classList.toggle('dark')
      if (body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark')
      } else {
        localStorage.setItem('mode', 'light')
      }
    })
  }
})

app.controller('revenusCtrl', function ($scope) {
  window.onload = function () {
    const labels = [
      'Tháng 1',
      'Tháng 2',
      'Tháng 3',
      'Tháng 4',
      'Tháng 5',
      'Tháng 6',
    ]

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Lượt truy cập',
          backgroundColor: 'blue',
          borderColor: 'blue',
          data: [10, 27, 56, 34, 24, 53],
          tension: 0.4,
        },
        {
          label: 'Người đăng nhập',
          backgroundColor: 'red',
          borderColor: 'red',
          data: [0, 34, 32, 23, 2, 82],
          tension: 0.4,
        },
        {
          label: 'Lượt người offline',
          backgroundColor: 'yellow',
          borderColor: 'yellow',
          data: [0, 2, 6, 3, 2, 0],
          tension: 0.4,
        },
      ],
    }
    const config = {
      type: 'line',
      data: data,
    }

    const canvas = document.getElementById('canvas')
    const chart = new Chart(canvas, config)
  }
})

app.controller('likesCtrl', function ($scope) {
  window.onload = function () {
    const tables = document.querySelectorAll('tbody tr')

    const removeTableSelector = () => {
      tables.forEach((table) => {
        table.classList.remove('active-row')
      })
    }

    tables.forEach((table) => {
      table.addEventListener('click', () => {
        removeTableSelector()
        table.classList.add('active-row')
      })
    })
  }
})
