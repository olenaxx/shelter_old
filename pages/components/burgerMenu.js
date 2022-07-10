const menu = document.querySelector('.burger_menu')
const nav = document.querySelector('.nav')
const links = [...document.querySelectorAll('.links')]
const logo = document.querySelector('.logo')
const overlay = document.querySelector('.burger-menu-overlay')

const closeMenu = () => {
  nav.classList.remove('open');
  logo.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('stop-scrolling');
}


const burgerSubscribe = () => {
  menu.addEventListener('click', () => {
  if (!nav.classList.contains('open')) {
    nav.classList.add('open');
    logo.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.add('stop-scrolling');
  } else {
    closeMenu();
  }
})

  overlay.addEventListener('click', () => {
    closeMenu();
  })
}

links.forEach(link=>link.addEventListener('click', () => closeMenu()))

export default burgerSubscribe