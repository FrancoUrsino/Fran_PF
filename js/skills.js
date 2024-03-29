const container = document.querySelector('.about__container--container--container--container');


const showContainer = () => {
  const containerContent = document.createElement('div');
  containerContent.className = '.about__container--container--container--container--container'
  
  containerContent.innerHTML =
  `
  <button class="about__container--container--container--container--container--btn active" id="softButton">soft Skills</button>
  <button class="about__container--container--container--container--container--btn" id="hardButton">Hard Skills</button>
  <p class="about__container--container--container--container--container--text" id="softText">Resolución de problemas y Conflictos | Creatividad | Gestión de Personas | Liderazgo | Trabajo en Equipo | Afrontar Problemáticas | Comunicación Activa | Adaptabilidad | Responsabilidad | Proactividad</p>
  <p class="about__container--container--container--container--container--text" id="hardText" style="display: none"> <ion-icon name="logo-html5"></ion-icon> <ion-icon name="logo-css3"></ion-icon> <i class="fa-brands fa-bootstrap"></i> <ion-icon name="logo-sass"></ion-icon> <ion-icon name="git-branch-outline"></ion-icon> <ion-icon name="logo-javascript"></ion-icon> <ion-icon name="logo-react"></ion-icon> <ion-icon name="logo-nodejs"></ion-icon> <ion-icon name="logo-npm"></ion-icon> <ion-icon name="logo-python"></ion-icon> <ion-icon name="logo-figma"></ion-icon> <ion-icon name="logo-firebase"></ion-icon></p>
  `
  container.append(containerContent);
  
  const hardButton = document.querySelector('#hardButton');
  const softButton = document.querySelector('#softButton');
  const hardText = document.querySelector('#hardText');
  const softText = document.querySelector('#softText');


  const changeHard = hardButton.addEventListener('click',() =>{softText.style.display = "none", hardText.style.display = "block", hardButton.classList.add('active'), softButton.classList.remove('active')});
  const changeSoft = softButton.addEventListener('click',() =>{hardText.style.display = "none", softText.style.display = "block", softButton.classList.add('active'), hardButton.classList.remove('active')});

  
}
showContainer();