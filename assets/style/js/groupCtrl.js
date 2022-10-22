app.controller('groupCrtl', function ($scope, $http, $routeParams) {
  angular.element(document).ready(function () {
    const tables = document.querySelectorAll('tbody tr')

    const createGroup = document.querySelector('#createGroup')
    const createModel1 = document.querySelector('.modal-create-group')

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

    //create group
    const onpenModel1 = () => {
      createModel1.style.display = 'grid'
    }

    createGroup?.addEventListener('click', onpenModel1)

    const closeModel1 = (e) => {
      if (e.target.classList.contains('modal-create-group')) {
        createModel1.style.display = 'none'
      }
    }

    createModel1?.addEventListener('click', closeModel1)
  })

  let host = 'http://localhost:8113/group'
  $scope.group = {}

  $scope.groups = {}

  $scope.load_All = async function () {
    var url = `${host}/api/all`
    await $http
      .get(url)
      .then((response) => {
        $scope.groups = response.data
        console.log(response.data)
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.edit = async function (id) {
    const updateGroup = document.querySelectorAll('.updateGroup')
    const updateModel1 = document.querySelector('.modal-edit-group')

    const onpenUpdateModel1 = () => {
      updateModel1.style.display = 'grid'
    }

    updateGroup.forEach((ele) =>
      ele?.addEventListener('click', onpenUpdateModel1),
    )

    const closeUpdateModel1 = (e) => {
      if (e.target.classList.contains('modal-edit-group')) {
        updateModel1.style.display = 'none'
      }
    }

    updateModel1?.addEventListener('click', closeUpdateModel1)

    var url = `${host}/api/get?id=${id}`
    await $http
      .get(url)
      .then((response) => {
        $scope.group = response.data
        console.log(response.data)
      })
      .catch((error) => {
        alert('Error')
      })
  }

  $scope.create = async function (files) {
    var form = new FormData()
    for (var i = 0; i < files.length; i++) {
      form.append('files', files[i])
    }
    console.log(form.get('files'))
    var url = `${host}/create`
    await $http
      .post(url, form, {
        transformRequest: angular.identity,
        headers: { 'Content-Type': undefined },
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log('Errors', error)
      })
  }

  $scope.update = async function () {
    var group = angular.copy($scope.group)
    var url = `${host}/update`
    console.log(group)
    await $http
      .put(url, group)
      .then((response) => {
        alert('Success' + response)
        window.location.reload()
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.delete = async function (id) {
    var url = `${host}/delete?groupId=${id}`
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
    $scope.group = {}
  }

  //start
  $scope.load_All()
})

app.controller('groupDetailsCtrl', function ($scope, $http, $routeParams) {
  angular.element(document).ready(function () {
    const tables = document.querySelectorAll('tbody tr')

    const createUser = document.querySelector('#createUser')
    const createModel4 = document.querySelector('.modal-create-user')

    //create user
    const onpenModel4 = () => {
      createModel4.style.display = 'grid'
    }

    createUser?.addEventListener('click', onpenModel4)

    const closeModel4 = (e) => {
      if (e.target.classList.contains('modal-create-user')) {
        createModel4.style.display = 'none'
      }
    }

    createModel4?.addEventListener('click', closeModel4)

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

  $scope.edit = function (groupId, userId) {
    const deleteUser = document.querySelectorAll('.deleteUser')
    const closeUser = document.querySelectorAll('.closeUser')
    const deleteModel5 = document.querySelector('.modal-delete-user')

    const dopenDleteModel5 = () => {
      deleteModel5.style.display = 'grid'
    }

    deleteUser.forEach((ele) =>
      ele?.addEventListener('click', dopenDleteModel5),
    )

    const closeDeleteModel5 = () => {
      deleteModel5.style.display = 'none'
    }

    closeUser.forEach((ele) =>
      ele?.addEventListener('click', closeDeleteModel5),
    )

    $scope.groupId = groupId
    $scope.userId = userId

    $scope.deleteUser = async function () {
      var url = `${host}/api/remove?groupId=${$scope.groupId}&userId=${$scope.userId}`
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
  }

  let host = 'http://localhost:8113/group'
  $scope.user = {}

  $scope.users = {}

  $scope.user.groupId = $routeParams.groupId

  $scope.load_All_User = async function () {
    var url = `${host}/api/get/student/?id=${$scope.user.groupId}`
    await $http
      .get(url)
      .then((response) => {
        $scope.users = response.data
        console.log(response.data)
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.createUser = async function () {
    var st = angular.copy($scope.user)
    var url = `${host}/save?groupId=${st.groupId}&userId=${st.userId}`
    await $http
      .post(url)
      .then((response) => {
        alert('Success' + response)
        window.location.reload()
      })
      .catch((error) => {
        alert('Error' + error)
      })
  }

  $scope.load_All_User()
})
