app.controller('accountCtrl', function ($scope) {
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
})
