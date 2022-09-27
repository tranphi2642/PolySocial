var app = angular.module('myapp', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider
    .when(
      '/login',
      { templateUrl: './views/login/login.html' },
      { controller: 'loginCtrl' },
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
      '/pagePeoples',
      { templateUrl: './views/pagePeoples/pagePeoples.html' },
      { controller: 'pagePeoplesCtrl' },
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
      '/admin',
      { templateUrl: './views/admin/home/home.html' },
      { controller: 'adminCtrl' },
    )
    .when(
      '/groups',
      { templateUrl: './views/admin/groups/groups.html' },
      { controller: 'groupsCtrl' },
    )
    .when(
      '/contents',
      { templateUrl: './views/admin/contents/contents.html' },
      { controller: 'contentsCtrl' },
    )
    .when(
      '/revenus',
      { templateUrl: './views/admin/revenus/revenus.html' },
      { controller: 'revenusCtrl' },
    )
    .when(
      '/likes',
      { templateUrl: './views/admin/likes/likes.html' },
      { controller: 'likesCtrl' },
    )
    .when(
      '/shares',
      { templateUrl: './views/admin/shares/shares.html' },
      { controller: 'likesCtrl' },
    )
    .when(
      '/comments',
      { templateUrl: './views/admin/comments/comments.html' },
      { controller: 'likesCtrl' },
    )
    .otherwise(
      { templateUrl: './views/login/login.html' },
      { controller: 'loginCtrl' },
    )
})

app.controller('loginCtrl', function ($scope) {
  angular.element(document).ready(function () {
    //form login
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
  })
})

app.controller('homeCtrl', function ($scope) {
  angular.element(document).ready(function () {
    //form home
    //sidebar
    const menuItem = document.querySelectorAll('.menu-item')

    //message
    const messageNotification = document.querySelector(
      '#messages-notifacations',
    )
    const messages = document.querySelector('.messages')
    const message = messages.querySelectorAll('.message')
    const messageSearch = document.querySelector('#search-bar')

    //theme
    const theme = document.querySelector('#theme')
    const themeModel = document.querySelector('.customize-theme')

    //fontsize
    const fontSizes = document.querySelectorAll('.choose-size span')
    var root = document.querySelector(':root')

    //color
    const colors = document.querySelectorAll('.choose-color span')

    //background
    const bg1 = document.querySelector('.bg-1')
    const bg2 = document.querySelector('.bg-2')
    const bg3 = document.querySelector('.bg-3')

    //remove active class from all menu items
    const changeActiveItem = () => {
      menuItem.forEach((item) => {
        item.classList.remove('active')
      })
    }

    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active')
        if (item.id != 'notifications') {
          document.querySelectorAll('.notifications-popup')[0].style.display =
            'none'
        } else {
          document.querySelectorAll('.notifications-popup')[0].style.display =
            'block'
          document.querySelectorAll(
            '#notifications .notification-count',
          )[0].style.display = 'none'
        }
      })
    })

    //message search

    const searchMessage = () => {
      const val = messageSearch.value.toLowerCase()
      message.forEach((chat) => {
        let name = chat.querySelector('h5').textContent.toLowerCase()
        if (name.indexOf(val) != -1 || name.indexOf(val) == '') {
          chat.style.display = 'flex'
        } else {
          chat.style.display = 'none'
        }
      })
    }

    messageSearch.addEventListener('keyup', searchMessage)

    // messageNotification.addEventListener('click', () => {
    //   messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    //   messageNotification.querySelectorAll('.notification-count')[0].style.display =
    //     'none'
    //   setTimeout(() => {
    //     messages.style.boxShadow = 'none'
    //   }, 1000)
    // })

    //theme
    const onpenThemModel = () => {
      themeModel.style.display = 'grid'
    }

    theme.addEventListener('click', onpenThemModel)

    const closeThemModel = (e) => {
      if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none'
      }
    }

    themeModel.addEventListener('click', closeThemModel)

    //font size
    const removeSizeSelector = () => {
      fontSizes.forEach((size) => {
        size.classList.remove('active')
      })
    }

    fontSizes.forEach((size) => {
      size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSize
        size.classList.toggle('active')

        if (size.classList.contains('font-size-1')) {
          fontSize = '10px'
          root.style.setProperty('----sticky-top-left', '5.4rem')
          root.style.setProperty('----sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size-2')) {
          fontSize = '13px'
          root.style.setProperty('----sticky-top-left', '5.4rem')
          root.style.setProperty('----sticky-top-right', '-7rem')
        } else if (size.classList.contains('font-size-3')) {
          fontSize = '16px'
          root.style.setProperty('----sticky-top-left', '-2rem')
          root.style.setProperty('----sticky-top-right', '-17rem')
        } else if (size.classList.contains('font-size-4')) {
          fontSize = '19px'
          root.style.setProperty('----sticky-top-left', '-5rem')
          root.style.setProperty('----sticky-top-right', '-25rem')
        } else if (size.classList.contains('font-size-5')) {
          fontSize = '22px'
          root.style.setProperty('----sticky-top-left', '-12rem')
          root.style.setProperty('----sticky-top-right', '-35rem')
        }

        document.querySelector('html').style.fontSize = fontSize
      })
    })

    //color
    const removeColorSelector = () => {
      colors.forEach((color) => {
        color.classList.remove('active')
      })
    }

    colors.forEach((color) => {
      color.addEventListener('click', () => {
        removeColorSelector()
        let primaryHue
        color.classList.add('active')

        if (color.classList.contains('color-1')) {
          primaryHue = 252
        } else if (color.classList.contains('color-2')) {
          primaryHue = 52
        } else if (color.classList.contains('color-3')) {
          primaryHue = 13
        } else if (color.classList.contains('color-4')) {
          primaryHue = 152
        } else if (color.classList.contains('color-5')) {
          primaryHue = 202
        }

        root.style.setProperty('--primary-color-hue', primaryHue)
      })
    })

    //background
    let ligtColorLightness
    let darkColorLightness
    let whiteColorLightness

    const changeBg = () => {
      root.style.setProperty('--light-color-lightness', ligtColorLightness)
      root.style.setProperty('--dark-color-lightness', darkColorLightness)
      root.style.setProperty('--white-color-lightness', whiteColorLightness)
    }

    bg1.addEventListener('click', () => {
      bg1.classList.add('active')

      bg2.classList.remove('active')
      bg3.classList.remove('active')
      window.location.reload()
    })

    bg2.addEventListener('click', () => {
      ligtColorLightness = '15%'
      darkColorLightness = '95%'
      whiteColorLightness = '20%'

      bg2.classList.add('active')

      bg1.classList.remove('active')
      bg3.classList.remove('active')
      changeBg()
    })

    bg3.addEventListener('click', () => {
      ligtColorLightness = '0%'
      darkColorLightness = '95%'
      whiteColorLightness = '10%'

      bg3.classList.add('active')

      bg1.classList.remove('active')
      bg2.classList.remove('active')
      changeBg()
    })
  })
})

app.controller('pageCtrl', function ($scope) {
  angular.element(document).ready(function () {
    const menuItem = document.querySelectorAll('.menu-item')

    const changeActiveItem = () => {
      menuItem.forEach((item) => {
        item.classList.remove('active')
      })
    }

    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active')
      })
    })
  })
})

app.controller('adminCtrl', function ($scope) {
  angular.element(document).ready(function () {
    //choose menu
    const menuItemAdmin = document.querySelectorAll('ul .menu-item')
    console.log(menuItemAdmin)
    const changeActiveItem = () => {
      menuItemAdmin.forEach((item) => {
        item.classList.remove('active')
      })
    }

    menuItemAdmin.forEach((item) => {
      item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active')
      })
    })

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
  })
})

app.controller('revenusCtrl', function ($scope) {
  angular.element(document).ready(function () {
    //charts
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
  })
})

app.controller('likesCtrl', function ($scope) {
  angular.element(document).ready(function () {
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
  })
})
