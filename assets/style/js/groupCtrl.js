app.controller('groupCrtl', function ($scope) {
  angular.element(document).ready(function () {
    const tables = document.querySelectorAll('tbody tr')

    const createUser = document.querySelector('#createUser')
    const createModel4 = document.querySelector('.modal-create-user')

    const deleteUser = document.querySelectorAll('.deleteUser')
    const closeUser = document.querySelectorAll('.closeUser')
    const deleteModel5 = document.querySelector('.modal-delete-user')

    const createGroup = document.querySelector('#createGroup')
    const createModel1 = document.querySelector('.modal-create-group')

    const updateGroup = document.querySelectorAll('.updateGroup')
    const updateModel1 = document.querySelector('.modal-edit-group')

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

    //update group
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

    //delete user
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
  })
})
