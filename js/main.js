const menuBtn = document.querySelector('#menuBtn');

menuBtn.addEventListener('click', function (menu) {
  document.querySelector('body').classList.toggle('MobileNavOpen');
  this.classList.toggle('fa-xmark')
})