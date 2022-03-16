function toggleMenu() {
    tratarMenu();
    tratarLinhasMenu();
}

function tratarMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function mudarTema() {
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('light-mode');
}

function tratarLinhasMenu() {
    const linhas = document.getElementsByClassName('linha');
    for (let index = 0; index < linhas.length; index++) {
        linhas[index].classList.toggle('active');
    }
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
    animacoesPagina();
});

function animacoesPagina() {
    getElementosSecao('banner');
    const secao = document.querySelectorAll('.secao');
    for (let index = 0; index < secao.length; index++) {
        const elemento = secao[index];
        getElementosSecao(elemento.id);
    }
}

function getElementosSecao(secaoId) {
    const secao = document.getElementById(secaoId);
    for (let index = 0; index < secao.childNodes.length; index++) {
        const elemento = secao.childNodes[index]; 
        if (elemento.id === 'depoimentos') {
            getElementosSecao(elemento.id);
        }
        else {
            animacaoPorElemento(elemento);
        }
    }
}

function animacaoPorElemento(elemento) {
    if (elemento.nodeType === 1) {
        let callback = function(entries) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    elemento.classList.add('animation-show');
                }
            });
        };
        
        const options = {
            root: null,
            threshold: [0, 1]
        }

        const io = new IntersectionObserver(callback, options);
        io.observe(elemento);
    }
}