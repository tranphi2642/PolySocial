const forms = document.querySelector('.forms'),
  pwShowHide = document.querySelectorAll('.eye-icon')

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(
      '.password',
    )

    pwFields.forEach((password) => {
      if (password.type === 'password') {
        password.type = 'text'
        eyeIcon.classList.replace('uil-eye-slash', 'uil-eye')
        return
      }
      password.type = 'password'
      eyeIcon.classList.replace('uil-eye', 'uil-eye-slash')
    })
  })
})

const body = document.querySelector('body'),
  modeToggle = body.querySelector('.mode-toggle')
sidebar = body.querySelector('nav')
sidebarToggle = body.querySelector('.sidebar-toggle')

let getMode = localStorage.getItem('mode')
if (getMode && getMode === 'dark') {
  body.classList.toggle('dark')
}

let getStatus = localStorage.getItem('status')
if (getStatus && getStatus === 'close') {
  sidebar.classList.toggle('close')
}

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark')
  if (body.classList.contains('dark')) {
    localStorage.setItem('mode', 'dark')
  } else {
    localStorage.setItem('mode', 'light')
  }
})
