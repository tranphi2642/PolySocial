app.controller('infoCtrl', function ($scope) {
  angular.element(document).ready(function () {
    const image_input = document.querySelector('#avatar')
    image_input.addEventListener('change', function () {
      const reader = new FileReader()
      reader.addEventListener('load', () => {
        const uploaded_image = reader.result
        document.querySelector(
          '#display-image',
        ).style.backgroundImage = `url(${uploaded_image})`
      })
      reader.readAsDataURL(this.files[0])
    })
  })
})
