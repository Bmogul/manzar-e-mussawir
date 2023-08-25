const navbar = document.getElementById('navbar');
let prevScrollpos = window.scrollY;
let scrolledDistance = 0; // To track how much scrolling was done since the navbar disappeared

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    let currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollpos) {
        // Scrolling down
        scrolledDistance = 0;
    } else {
        // Scrolling up
        scrolledDistance += (prevScrollpos - currentScrollPos);
    }

    if(currentScrollPos <= 80){
        navbar.style.animation = 'fadeIn 0.5s';
        navbar.classList.remove('transparent');
    }else{
        if (scrolledDistance > 100) {
            navbar.style.animation = 'fadeIn 0.5s';
            navbar.classList.remove('transparent');
        } else {
            navbar.style.animation = 'fadeOut 0.5s';
            navbar.classList.add('transparent');
        }
    }



    prevScrollpos = currentScrollPos;
});
