let navbar = document.querySelector('.header .navbar');

document.getElementById('menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.getElementById('nav-close').onclick = () => {
    navbar.classList.remove('active');
}


let searchForm = document.querySelector('.search-form');

document.getElementById('search-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.getElementById('close-search').onclick = () => {
    searchForm.classList.remove('active');
}


window.onscroll = () => {
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else {
        document.querySelector('.header').classList.remove('active');
    }
};


window.onload = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('.active');
    }else{
        document.querySelector('.header').classList.remove('.active');
    }
}
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});