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
