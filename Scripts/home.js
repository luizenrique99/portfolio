

function toggleMenu() {
    tratarMenu();
    tratarLinhasMenu(); 
}

function tratarMenu () {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');    
}

function tratarLinhasMenu () {
    const linhas = document.getElementsByClassName('linha');  
    for (let index = 0; index < linhas.length; index++) {
        linhas[index].classList.toggle('active');    
    }
}

function openResume() {
    criarLink('./Assets/CV English - Luiz Camargo [UPDATE] (1).pdf');
  }

function verGithub() {
    criarLink('https://github.com/luizcamargo99');
}

function verLinkedin() {
    criarLink('https://www.linkedin.com/in/luiz-enrique-nobrega-de-camargo-2bb849141/');
}
  
function criarLink(url) {
    const tagA = document.createElement("a");    
    tagA.href = url;
    tagA.target = 'blank';
    tagA.click();
}

document.addEventListener("DOMContentLoaded", function() {
    const btnMobile = document.getElementById('btn-mobile');
    btnMobile.addEventListener('click', toggleMenu);
});