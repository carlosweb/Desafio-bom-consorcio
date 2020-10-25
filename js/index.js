const btToggle = document.querySelector('.button-toggle')
const sideBar = document.querySelector('.content-left')
const iconBarRight = document.querySelector('.bi-chevron-right')

btToggle.addEventListener('click', event => {
    event.preventDefault()
    sideBar.classList.toggle('open')
    iconBarRight.classList.toggle('rotate')
} )

const accordion = document.getElementsByClassName('accordion')

  for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', e => {
      e.stopPropagation()
        accordion[i].classList.toggle('active')
    })
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })