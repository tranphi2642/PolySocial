app.controller('likesCtrl', function ($scope) {
  angular.element(document).ready(function () {
    const tables = document.querySelectorAll('tbody tr')

    //active row
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
