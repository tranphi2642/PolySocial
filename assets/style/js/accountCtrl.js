let host = 'http://localhost:8080/api'

app.controller('accountCtrl', function ($scope, $http) {
  angular.element(document).ready(function () {
    const tables = document.querySelectorAll('tbody tr')

    const createAccount = document.querySelector('#createAccount')
    const createModel3 = document.querySelector('.modal-create-account')

    const updateAccount = document.querySelectorAll('.updateAccount')
    const updateModel3 = document.querySelector('.modal-edit-account')

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

    //create account
    const onpenModel3 = () => {
      createModel3.style.display = 'grid'
    }

    createAccount?.addEventListener('click', onpenModel3)

    const closeModel3 = (e) => {
      if (e.target.classList.contains('modal-create-account')) {
        createModel3.style.display = 'none'
      }
    }

    createModel3?.addEventListener('click', closeModel3)

    //update account
    const onpenUpdateModel3 = () => {
      updateModel3.style.display = 'grid'
    }

    updateAccount.forEach((ele) =>
      ele?.addEventListener('click', onpenUpdateModel3),
    )

    const closeUpdateModel3 = (e) => {
      if (e.target.classList.contains('modal-edit-account')) {
        updateModel3.style.display = 'none'
      }
    }

    updateModel3?.addEventListener('click', closeUpdateModel3)
  })

  $scope.account = {}

  $scope.accounts = {}

  $scope.load_All = function () {
    var url = `${host}/account`
    $http
      .get(url)
      .then((response) => {
        $scope.accounts = response.data
        console.log(response.data)
        alert('Success')
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.edit = function (id) {
    var url = `${host}/account/${id}`
    $http
      .get(url)
      .then((response) => {
        $scope.account = response.data
        alert('Success')
      })
      .catch((error) => {
        alert('Error')
      })
  }

  $scope.create = function () {
    var st = angular.copy($scope.account)
    var url = `${host}/account`
    $http
      .post(url, st)
      .then((response) => {
        $scope.accounts.push(st)
        $scope.reset()
        alert('Success' + response)
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.update = function () {
    var st = angular.copy($scope.account)
    var url = `${host}/account/${$scope.account.id}`
    $http
      .put(url, st)
      .then((response) => {
        var index = $scope.accounts.findIndex((x) => x.id == $scope.account.id)
        $scope.accounts[index] = response.data
        alert('Success' + response)
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.delete = function (id) {
    var url = `${host}/account/${id}`
    $http
      .delete(url)
      .then((response) => {
        var index = $scope.accounts.findIndex((x) => x.id == id)
        $scope.accounts.splice(index, 1)
        $scope.reset()
        alert('Success' + response)
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.reset = function () {
    $scope.account = { gender: true, country: '' }
    $scope.key = null
  }

  //start
  // $scope.load_All()
  $scope.reset()
})
