app.controller('contentCrtl', function ($scope, $http) {
  let host = 'http://localhost:8111/post'

  $scope.content = {}

  $scope.contents = {}

  $scope.load_All = function () {
    var url = `${host}/get/all`
    $http
      .get(url)
      .then((response) => {
        $scope.contents = response.data
        console.log(response.data)
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  //start
  $scope.load_All()

  angular.element(document).ready(function () {
    const tables = document.querySelectorAll('tbody tr')

    const createContent = document.querySelector('#createContent')
    const createModel2 = document.querySelector('.modal-create-content')

    const updateContent = document.querySelectorAll('.updateContent')
    const updateModel2 = document.querySelector('.modal-edit-content')

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

    //create content
    const onpenModel2 = () => {
      createModel2.style.display = 'grid'
    }

    createContent?.addEventListener('click', onpenModel2)

    const closeModel2 = (e) => {
      if (e.target.classList.contains('modal-create-content')) {
        createModel2.style.display = 'none'
      }
    }

    createModel2?.addEventListener('click', closeModel2)

    //update content
    const onpenUpdateModel2 = () => {
      updateModel2.style.display = 'grid'
    }

    updateContent.forEach((ele) =>
      ele?.addEventListener('click', onpenUpdateModel2),
    )

    const closeUpdateModel2 = (e) => {
      if (e.target.classList.contains('modal-edit-content')) {
        updateModel2.style.display = 'none'
      }
    }

    updateModel2?.addEventListener('click', closeUpdateModel2)
  })
})

angular.module('myapp').filter('cut', function () {
  return function (value, wordwise, max, tail) {
    if (!value) return ''

    max = parseInt(max, 10)
    if (!max) return value
    if (value.length <= max) return value

    value = value.substr(0, max)
    if (wordwise) {
      var lastspace = value.lastIndexOf(' ')
      if (lastspace !== -1) {
        //Also remove . and , so its gives a cleaner result.
        if (
          value.charAt(lastspace - 1) === '.' ||
          value.charAt(lastspace - 1) === ','
        ) {
          lastspace = lastspace - 1
        }
        value = value.substr(0, lastspace)
      }
    }

    return value + (tail || ' …')
  }
})
