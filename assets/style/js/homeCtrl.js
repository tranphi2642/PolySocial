app.controller('homeCtrl', function ($scope) {
  angular.element(document).ready(function () {
    //form home
    //sidebar
    const menuItem = document.querySelectorAll('.menu-item')

    //message
    const messageNotification = document.querySelector(
      '#messages-notifacations',
    )
    const messages = document.querySelector('.messages')
    const message = messages.querySelectorAll('.message')
    const messageSearch = document.querySelector('#search-bar')

    //theme
    const theme = document.querySelector('#theme')
    const themeModel = document.querySelector('.customize-theme')

    //fontsize
    const fontSizes = document.querySelectorAll('.choose-size span')
    var root = document.querySelector(':root')

    //color
    const colors = document.querySelectorAll('.choose-color span')

    //background
    const bg1 = document.querySelector('.bg-1')
    const bg2 = document.querySelector('.bg-2')
    const bg3 = document.querySelector('.bg-3')

    //remove active class from all menu items
    const changeActiveItem = () => {
      menuItem.forEach((item) => {
        item.classList.remove('active')
      })
    }

    menuItem.forEach((item) => {
      item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active')
        if (item.id != 'notifications') {
          document.querySelectorAll('.notifications-popup')[0].style.display =
            'none'
        } else {
          document.querySelectorAll('.notifications-popup')[0].style.display =
            'block'
          document.querySelectorAll(
            '#notifications .notification-count',
          )[0].style.display = 'none'
        }

        if (item.id != 'notifications-deline') {
          document.querySelectorAll('.notifications-deline')[0].style.display =
            'none'
        } else {
          document.querySelectorAll('.notifications-deline')[0].style.display =
            'block'
          document.querySelectorAll(
            '#notifications-deline .notification-count',
          )[0].style.display = 'none'
        }
      })
    })

    //message search

    const searchMessage = () => {
      const val = messageSearch.value.toLowerCase()
      message.forEach((chat) => {
        let name = chat.querySelector('h5').textContent.toLowerCase()
        if (name.indexOf(val) != -1 || name.indexOf(val) == '') {
          chat.style.display = 'flex'
        } else {
          chat.style.display = 'none'
        }
      })
    }

    messageSearch.addEventListener('keyup', searchMessage)

    // messageNotification.addEventListener('click', () => {
    //   messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    //   messageNotification.querySelectorAll('.notification-count')[0].style.display =
    //     'none'
    //   setTimeout(() => {
    //     messages.style.boxShadow = 'none'
    //   }, 1000)
    // })

    //theme
    const onpenThemModel = () => {
      themeModel.style.display = 'grid'
    }

    theme.addEventListener('click', onpenThemModel)

    const closeThemModel = (e) => {
      if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none'
      }
    }

    themeModel.addEventListener('click', closeThemModel)

    //font size
    const removeSizeSelector = () => {
      fontSizes.forEach((size) => {
        size.classList.remove('active')
      })
    }

    fontSizes.forEach((size) => {
      size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSize
        size.classList.toggle('active')

        if (size.classList.contains('font-size-1')) {
          fontSize = '10px'
          root.style.setProperty('----sticky-top-left', '5.4rem')
          root.style.setProperty('----sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size-2')) {
          fontSize = '13px'
          root.style.setProperty('----sticky-top-left', '5.4rem')
          root.style.setProperty('----sticky-top-right', '-7rem')
        } else if (size.classList.contains('font-size-3')) {
          fontSize = '16px'
          root.style.setProperty('----sticky-top-left', '-2rem')
          root.style.setProperty('----sticky-top-right', '-17rem')
        } else if (size.classList.contains('font-size-4')) {
          fontSize = '19px'
          root.style.setProperty('----sticky-top-left', '-5rem')
          root.style.setProperty('----sticky-top-right', '-25rem')
        } else if (size.classList.contains('font-size-5')) {
          fontSize = '22px'
          root.style.setProperty('----sticky-top-left', '-12rem')
          root.style.setProperty('----sticky-top-right', '-35rem')
        }

        document.querySelector('html').style.fontSize = fontSize
      })
    })

    //color
    const removeColorSelector = () => {
      colors.forEach((color) => {
        color.classList.remove('active')
      })
    }

    colors.forEach((color) => {
      color.addEventListener('click', () => {
        removeColorSelector()
        let primaryHue
        color.classList.add('active')

        if (color.classList.contains('color-1')) {
          primaryHue = 252
        } else if (color.classList.contains('color-2')) {
          primaryHue = 52
        } else if (color.classList.contains('color-3')) {
          primaryHue = 13
        } else if (color.classList.contains('color-4')) {
          primaryHue = 152
        } else if (color.classList.contains('color-5')) {
          primaryHue = 202
        }

        root.style.setProperty('--primary-color-hue', primaryHue)
      })
    })

    //background
    let ligtColorLightness
    let darkColorLightness
    let whiteColorLightness

    const changeBg = () => {
      root.style.setProperty('--light-color-lightness', ligtColorLightness)
      root.style.setProperty('--dark-color-lightness', darkColorLightness)
      root.style.setProperty('--white-color-lightness', whiteColorLightness)
    }

    bg1.addEventListener('click', () => {
      bg1.classList.add('active')

      bg2.classList.remove('active')
      bg3.classList.remove('active')
      window.location.reload()
    })

    bg2.addEventListener('click', () => {
      ligtColorLightness = '15%'
      darkColorLightness = '95%'
      whiteColorLightness = '20%'

      bg2.classList.add('active')

      bg1.classList.remove('active')
      bg3.classList.remove('active')
      changeBg()
    })

    bg3.addEventListener('click', () => {
      ligtColorLightness = '0%'
      darkColorLightness = '95%'
      whiteColorLightness = '10%'

      bg3.classList.add('active')

      bg1.classList.remove('active')
      bg2.classList.remove('active')
      changeBg()
    })
  })
})
