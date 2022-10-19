app.controller('pageCtrl', function ($scope) {
  angular.element(document).ready(function () {
    const menuItem = document.querySelectorAll('.menu-item')

    const createQuiz = document.querySelector('#createQuiz')
    const createModelQuiz = document.querySelector('.modal-create-quiz')

    //active row
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

    //create quiz
    const onpenModel3 = () => {
      createModelQuiz.style.display = 'grid'
    }

    createQuiz?.addEventListener('click', onpenModel3)

    const closeModel3 = (e) => {
      if (e.target.classList.contains('modal-create-quiz')) {
        createModelQuiz.style.display = 'none'
      }
    }

    createModelQuiz?.addEventListener('click', closeModel3)
  })
})
