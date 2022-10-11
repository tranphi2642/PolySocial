app.controller('adminCtrl', function ($scope) {
  angular.element(document).ready(function () {
    //admin home
    const body = document.querySelector('body'),
      modeToggle = body.querySelector('.mode-toggle')
    sidebar = body.querySelector('.navbar-admin')
    sidebarToggle = body.querySelector('.sidebar-toggle')

    let getMode = localStorage.getItem('mode')
    if (getMode && getMode === 'dark') {
      body.classList.toggle('dark')
    }

    let getStatus = localStorage.getItem('status')
    if (getStatus && getStatus === 'close') {
      sidebar.classList.toggle('close')
    }

    modeToggle?.addEventListener('click', () => {
      body.classList.toggle('dark')
      if (body.classList.contains('dark')) {
        localStorage.setItem('mode', 'dark')
      } else {
        localStorage.setItem('mode', 'light')
      }
    })

    sidebarToggle?.addEventListener('click', () => {
      sidebar.classList.toggle('close')
      if (sidebar.classList.contains('close')) {
        localStorage.setItem('status', 'close')
      } else {
        localStorage.setItem('status', 'open')
      }
    })

    //choose menu
    const menuItemAdmin = document.querySelectorAll('ul .menu-item')
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
  })
})
