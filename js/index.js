// sidebar js
const btToggle = document.querySelector('.button-toggle')
const sideBar = document.querySelector('.content-left')
const iconBarRight = document.querySelector('.bi-chevron-right')

btToggle.addEventListener('click', event => {
    event.preventDefault()
    sideBar.classList.toggle('open')
    iconBarRight.classList.toggle('rotate')
} )


// accordion
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    acc[i].classList.toggle('active')
    const panel = acc[i].nextElementSibling
    if(panel.style.maxHeight){
      panel.style.maxHeight = null
    }else{
      panel.style.maxHeight = 0
    }
  })
} 

// Tooltip js
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

const light = document.querySelector('.bi-sun')
const dark = document.querySelector('.bi-moon')
const body = document.querySelector('body')

const lightTheme = () => {
  if(body.className === 'light') {
    body.className = 'dark'
    dark.style.display = 'block'
    light.style.display = 'none'
  }else{
    body.className = 'light'
  }
}

const darkTheme = () => {
  if(body.className === 'dark') {
    body.className = 'light'
    dark.style.display = 'none'
    light.style.display = 'block'
  }else{
    body.className = 'dark'
  }
}


light.addEventListener('click', lightTheme )
dark.addEventListener('click', darkTheme )