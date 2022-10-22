app.controller('contentCrtl', function ($scope, $http) {
  let host = 'http://localhost:8111/post'

  $scope.content = {}

  $scope.contents = {}

  $scope.findContents = async function (content) {
    var url = `${host}/find?content=${content}`
    await $http
      .get(url)
      .then(function (response) {
        $scope.contents = response.data
        alert('success')
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.load_All = async function () {
    var url = `${host}/get/all`
    await $http
      .get(url)
      .then((response) => {
        $scope.contents = response.data
        console.log(response.data)
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.edit = async function (id) {
    const updateContent = document.querySelectorAll('.updateContent')
    const updateModel2 = document.querySelector('.modal-edit-content')

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

    var url = `${host}/get/post?postId=${id}`
    await $http
      .get(url)
      .then((response) => {
        $scope.content = response.data
        $scope.content.createdDate = new Date($scope.content.createdDate)
        console.log(response.data)
      })
      .catch((error) => {
        alert('Error')
      })
  }

  $scope.updateContent = async function () {
    var st = angular.copy($scope.content)
    var url = `${host}/update`
    await $http
      .put(url, st)
      .then((response) => {
        alert('Success' + response)
        window.location.reload()
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.deleteContent = async function (id) {
    var url = `${host}/delete?postId=${id}`
    await $http
      .delete(url)
      .then((response) => {
        alert('Success' + response)
        window.location.reload()
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.reset = function () {
    $scope.content = {
      postId: $scope.content.postId,
      content: '',
      createdDate: '',
      userId: '',
      groupId: '',
    }
  }

  //start
  $scope.load_All()
  $scope.reset()

  angular.element(document).ready(function () {
    const tables = document.querySelectorAll('tbody tr')

    const createContent = document.querySelector('#createContent')
    const createModel2 = document.querySelector('.modal-create-content')

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
  })
})

app.controller('create-content', function ($scope, $http) {
  let host = 'http://localhost:8111/post'

  $scope.content = {}

  $scope.contents = {}

  $scope.createContent = async function () {
    var st = angular.copy($scope.content)
    console.log(st)
    var url = `${host}/create?userId=${st.userId}&groupId=${st.groupId}`
    await $http
      .post(url, st)
      .then((response) => {
        alert('Success' + response)
        window.location.reload()
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }
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
