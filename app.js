
const togglebtn = document.getElementsByClassName('toggle-button')[0];
const navbarlinks =document.getElementsByClassName('navbar-links')[0];


togglebtn.addEventListener('click',() =>{

  navbarlinks.classList.toggle('active')


});
