function toggleMenu() {
    handleMenu();
    handleMenuLines();
}
function nextSlideProjects (source) {
    handleSlide(source);
    handlePage(source);
    if (isMobileDevice()) {
        createLink('#projects', true);
    }
}

function isMobileDevice() {
    return screen.width < 900;
}

function handleSlide(sourceSlide) {
    const slides = [
        document.getElementById('slide-1'),
        document.getElementById('slide-2'),
        document.getElementById('slide-3')
    ];

    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        if (element.id == `slide-${sourceSlide}`){
            element.classList.remove('offline');
        }
        else {
            element.classList.add('offline');
        }       
    }
}

function handlePage(sourcePage) {
    const pages = [
        document.getElementById('page-1'),
        document.getElementById('page-2'),
        document.getElementById('page-3')
    ];

    for (let index = 0; index < pages.length; index++) {
        const element = pages[index];
        if (element.id == `page-${sourcePage}`){
            element.classList.add('active');
        }
        else {
            element.classList.remove('active');
        }  
    }
}

function handleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

function changeTheme() {
    const body = document.getElementsByTagName('body');
    body[0].classList.toggle('light-mode');
}

function handleMenuLines() {
    const lines = document.getElementsByClassName('line');
    for (let index = 0; index < lines.length; index++) {
        lines[index].classList.toggle('active');
    }
}

function createLink(url, ehProjetoSlide) {
    const tagA = document.createElement("a");
    tagA.href = url;

    if (!ehProjetoSlide){
        tagA.target = 'blank';
    }
    tagA.click();
}

document.addEventListener("DOMContentLoaded", function() {
    const mobileButton = document.getElementById('btn-mobile');
    mobileButton.addEventListener('click', toggleMenu);  
    animationsPage();
});

function animationsPage() {
    getSectionElements('banner');
    getSection();
}

function getSection () {
    const section = document.querySelectorAll('.section');
    for (let index = 0; index < section.length; index++) {
        getSectionElements(section[index].id);
    }
}

function getSectionElements(sectionId) {
    const section = document.getElementById(sectionId);
    for (let index = 0; index < section.childNodes.length; index++) {
        const element = section.childNodes[index]; 
        if (element.id === 'testimonials_content') {
            getSectionElements(element.id);
        }
        else {
            animationForElement(element);
        }
    }
}

function animationForElement(element) {
    if (element.nodeType === 1) {
        let callback = function(entries) {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    element.classList.add('animation-show');
                }
            });
        };
        
        const options = {
            root: null,
            threshold: [0, 1]
        }

        const io = new IntersectionObserver(callback, options);
        io.observe(element);
    }
}