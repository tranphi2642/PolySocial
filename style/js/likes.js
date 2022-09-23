const tables = document.querySelectorAll('tbody tr')

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
