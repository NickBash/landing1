document.getElementById('menu').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('menu-button_change')
  document
    .querySelector('.nav-mobile')
    .classList.toggle('nav-mobile_mobile_visible')
})
