app.controller('contentCrtl', function ($scope) {
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
