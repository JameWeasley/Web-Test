let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mySlides-2");
    let dots2 = document.getElementsByClassName("dot");
    if (n > slides2.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
}

let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let slides3 = document.getElementsByClassName("mySlides-3");
    let dots3 = document.getElementsByClassName("dot");

    if (n > slides3.length) {
        slideIndex3 = 1;
    }
    if (n < 1) {
        slideIndex3 = slides3.length;
    }

    for (let i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }

    for (let i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }

    slides3[slideIndex3 - 1].style.display = "block";
    dots3[slideIndex3 - 1].className += " active";
}

let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    let slides4 = document.getElementsByClassName("mySlides-4");
    let dots4 = document.getElementsByClassName("dot");

    if (n > slides4.length) {
        slideIndex4 = 1;
    }
    if (n < 1) {
        slideIndex4 = slides4.length;
    }

    for (let i = 0; i < slides4.length; i++) {
        slides4[i].style.display = "none";
    }

    for (let i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }

    slides4[slideIndex4 - 1].style.display = "block";
    dots4[slideIndex4 - 1].className += " active";
}

let slideIndex5 = 1;
showSlides5(slideIndex5);

function plusSlides5(n) {
    showSlides5(slideIndex5 += n);
}

function currentSlide5(n) {
    showSlides5(slideIndex5 = n);
}

function showSlides5(n) {
    let slides5 = document.getElementsByClassName("mySlides-5");
    let dots5 = document.getElementsByClassName("dot");

    if (n > slides5.length) {
        slideIndex5 = 1;
    }
    if (n < 1) {
        slideIndex5 = slides5.length;
    }

    for (let i = 0; i < slides5.length; i++) {
        slides5[i].style.display = "none";
    }

    for (let i = 0; i < dots5.length; i++) {
        dots5[i].className = dots5[i].className.replace(" active", "");
    }

    slides5[slideIndex5 - 1].style.display = "block";
    dots5[slideIndex5 - 1].className += " active";
}

let slideIndex6 = 1;
showSlides6(slideIndex6);

function plusSlides6(n) {
    showSlides6(slideIndex6 += n);
}

function currentSlide6(n) {
    showSlides6(slideIndex6 = n);
}

function showSlides6(n) {
    let slides6 = document.getElementsByClassName("mySlides-6");
    let dots6 = document.getElementsByClassName("dot");

    if (n > slides6.length) {
        slideIndex6 = 1;
    }
    if (n < 1) {
        slideIndex6 = slides6.length;
    }

    for (let i = 0; i < slides6.length; i++) {
        slides6[i].style.display = "none";
    }

    for (let i = 0; i < dots6.length; i++) {
        dots6[i].className = dots6[i].className.replace(" active", "");
    }

    slides6[slideIndex6 - 1].style.display = "block";
    dots6[slideIndex6 - 1].className += " active";
}

let slideIndex7 = 1;
showSlides7(slideIndex7);

function plusSlides7(n) {
    showSlides7(slideIndex7 += n);
}

function currentSlide7(n) {
    showSlides7(slideIndex7 = n);
}

function showSlides7(n) {
    let slides7 = document.getElementsByClassName("mySlides-7");
    let dots7 = document.getElementsByClassName("dot");

    if (n > slides7.length) {
        slideIndex7 = 1;
    }
    if (n < 1) {
        slideIndex7 = slides7.length;
    }

    for (let i = 0; i < slides7.length; i++) {
        slides7[i].style.display = "none";
    }

    for (let i = 0; i < dots7.length; i++) {
        dots7[i].className = dots7[i].className.replace(" active", "");
    }

    slides7[slideIndex7 - 1].style.display = "block";
    dots7[slideIndex7 - 1].className += " active";
}

let slideIndex8 = 1;
showSlides8(slideIndex8);

function plusSlides8(n) {
    showSlides8(slideIndex8 += n);
}

function currentSlide8(n) {
    showSlides8(slideIndex8 = n);
}

function showSlides8(n) {
    let slides8 = document.getElementsByClassName("mySlides-8");
    let dots8 = document.getElementsByClassName("dot");

    if (n > slides8.length) {
        slideIndex8 = 1;
    }
    if (n < 1) {
        slideIndex8 = slides8.length;
    }

    for (let i = 0; i < slides8.length; i++) {
        slides8[i].style.display = "none";
    }

    for (let i = 0; i < dots8.length; i++) {
        dots8[i].className = dots8[i].className.replace(" active", "");
    }

    slides8[slideIndex8 - 1].style.display = "block";
    dots8[slideIndex8 - 1].className += " active";
}

let slideIndex9 = 1;
showSlides9(slideIndex9);

function plusSlides9(n) {
    showSlides9(slideIndex9 += n);
}

function currentSlide9(n) {
    showSlides9(slideIndex9 = n);
}

function showSlides9(n) {
    let slides9 = document.getElementsByClassName("mySlides-9");
    let dots9 = document.getElementsByClassName("dot");

    if (n > slides9.length) {
        slideIndex9 = 1;
    }
    if (n < 1) {
        slideIndex9 = slides9.length;
    }

    for (let i = 0; i < slides9.length; i++) {
        slides9[i].style.display = "none";
    }

    for (let i = 0; i < dots9.length; i++) {
        dots9[i].className = dots9[i].className.replace(" active", "");
    }

    slides9[slideIndex9 - 1].style.display = "block";
    dots9[slideIndex9 - 1].className += " active";
}

let slideIndex10 = 1;
showSlides10(slideIndex10);

function plusSlides10(n) {
    showSlides10(slideIndex10 += n);
}

function currentSlide10(n) {
    showSlides10(slideIndex10 = n);
}

function showSlides10(n) {
    let slides10 = document.getElementsByClassName("mySlides-10");
    let dots10 = document.getElementsByClassName("dot");

    if (n > slides10.length) {
        slideIndex10 = 1;
    }
    if (n < 1) {
        slideIndex10 = slides10.length;
    }

    for (let i = 0; i < slides10.length; i++) {
        slides10[i].style.display = "none";
    }

    for (let i = 0; i < dots10.length; i++) {
        dots10[i].className = dots10[i].className.replace(" active", "");
    }

    slides10[slideIndex10 - 1].style.display = "block";
    dots10[slideIndex10 - 1].className += " active";
}

let slideIndex11 = 1;
showSlides11(slideIndex11);

function plusSlides11(n) {
    showSlides11(slideIndex11 += n);
}

function currentSlide11(n) {
    showSlides11(slideIndex11 = n);
}

function showSlides11(n) {
    let slides11 = document.getElementsByClassName("mySlides-11");
    let dots11 = document.getElementsByClassName("dot");

    if (n > slides11.length) {
        slideIndex11 = 1;
    }
    if (n < 1) {
        slideIndex11 = slides11.length;
    }

    for (let i = 0; i < slides11.length; i++) {
        slides11[i].style.display = "none";
    }

    for (let i = 0; i < dots11.length; i++) {
        dots11[i].className = dots11[i].className.replace(" active", "");
    }

    slides11[slideIndex11 - 1].style.display = "block";
    dots11[slideIndex11 - 1].className += " active";
}

let slideIndex12 = 1;
showSlides12(slideIndex12);

function plusSlides11(n) {
    showSlides12(slideIndex12 += n);
}

function currentSlide11(n) {
    showSlides12(slideIndex12 = n);
}

function showSlides12(n) {
    let slides12 = document.getElementsByClassName("mySlides-12");
    let dots12 = document.getElementsByClassName("dot");

    if (n > slides12.length) {
        slideIndex12 = 1;
    }
    if (n < 1) {
        slideIndex12 = slides12.length;
    }

    for (let i = 0; i < slides12.length; i++) {
        slides12[i].style.display = "none";
    }

    for (let i = 0; i < dots12.length; i++) {
        dots12[i].className = dots12[i].className.replace(" active", "");
    }

    slides12[slideIndex12 - 1].style.display = "block";
    dots12[slideIndex12 - 1].className += " active";
}

let slideIndex13 = 1;
showSlides13(slideIndex13);

function plusSlides13(n) {
    showSlides13(slideIndex13 += n);
}

function currentSlide13(n) {
    showSlides13(slideIndex13 = n);
}

function showSlides13(n) {
    let slides13 = document.getElementsByClassName("mySlides-13");
    let dots13 = document.getElementsByClassName("dot");

    if (n > slides13.length) {
        slideIndex13 = 1;
    }
    if (n < 1) {
        slideIndex13 = slides13.length;
    }

    for (let i = 0; i < slides13.length; i++) {
        slides13[i].style.display = "none";
    }

    for (let i = 0; i < dots13.length; i++) {
        dots13[i].className = dots13[i].className.replace(" active", "");
    }

    slides13[slideIndex13 - 1].style.display = "block";
    dots13[slideIndex13 - 1].className += " active";
}

let slideIndex14 = 1;
showSlides14(slideIndex14);

function plusSlides14(n) {
    showSlides14(slideIndex14 += n);
}

function currentSlide14(n) {
    showSlides14(slideIndex14 = n);
}

function showSlides14(n) {
    let slides14 = document.getElementsByClassName("mySlides-14");
    let dots14 = document.getElementsByClassName("dot");

    if (n > slides14.length) {
        slideIndex14 = 1;
    }
    if (n < 1) {
        slideIndex14 = slides14.length;
    }

    for (let i = 0; i < slides14.length; i++) {
        slides14[i].style.display = "none";
    }

    for (let i = 0; i < dots14.length; i++) {
        dots14[i].className = dots14[i].className.replace(" active", "");
    }

    slides14[slideIndex14 - 1].style.display = "block";
    dots14[slideIndex14 - 1].className += " active";
}

let slideIndex15 = 1;
showSlides15(slideIndex15);

function plusSlides15(n) {
    showSlides15(slideIndex15 += n);
}

function currentSlide15(n) {
    showSlides15(slideIndex15 = n);
}

function showSlides15(n) {
    let slides15 = document.getElementsByClassName("mySlides-15");
    let dots15 = document.getElementsByClassName("dot");

    if (n > slides15.length) {
        slideIndex15 = 1;
    }
    if (n < 1) {
        slideIndex15 = slides15.length;
    }

    for (let i = 0; i < slides15.length; i++) {
        slides15[i].style.display = "none";
    }

    for (let i = 0; i < dots15.length; i++) {
        dots15[i].className = dots15[i].className.replace(" active", "");
    }

    slides15[slideIndex15 - 1].style.display = "block";
    dots15[slideIndex15 - 1].className += " active";
}

let slideIndex16 = 1;
showSlides16(slideIndex16);

function plusSlides16(n) {
    showSlides16(slideIndex16 += n);
}

function currentSlide16(n) {
    showSlides16(slideIndex16 = n);
}

function showSlides16(n) {
    let slides16 = document.getElementsByClassName("mySlides-16");
    let dots16 = document.getElementsByClassName("dot");

    if (n > slides16.length) {
        slideIndex16 = 1;
    }
    if (n < 1) {
        slideIndex16 = slides16.length;
    }

    for (let i = 0; i < slides16.length; i++) {
        slides16[i].style.display = "none";
    }

    for (let i = 0; i < dots16.length; i++) {
        dots16[i].className = dots16[i].className.replace(" active", "");
    }

    slides16[slideIndex16 - 1].style.display = "block";
    dots16[slideIndex16 - 1].className += " active";
}


const scroll = document.querySelector('.head-nav');
const nav = document.querySelector('nav');

function scrollDown() {
    if (window.scrollY > 0) {
        scroll.style.display = "none"
    } else {
        scroll.style.display = '';
    }
}

nav.classList.toggle('sticky');




window.addEventListener('scroll', scrollDown);



function mobileMenu() {
    let mobile = document.getElementById("mobile-menu");
    if (mobile.style.display === "none") {
        mobile.style.display = "flex";
    }else {
        mobile.style.display = "none"
    }
}