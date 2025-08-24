 var typed = new Typed(".spann", {
    strings: [
        "",
      "I'm Abdo Karem.",
    "  I'm a Front-End Developer."
    ],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
  });

 const togglemenu = () => {
    document.getElementById('navlink').classList.toggle('show');
}

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,   // عدد الكروت اللي تظهر
      spaceBetween: 30,   // مسافة بين الكروت
      centeredSlides: true, // يخليهم في النص
      loop: true,   // يخليهم يلفوا دايرة
      slidesPerView: "auto",   // بيخلي كل بوكس عرضه اللي في CSS
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       breakpoints: {
      0:   { slidesPerView: 0, spaceBetween: 16 },
      530: { slidesPerView: 0, spaceBetween: 200 },
      600: {slidesPerView: 1,   spaceBetween: 20 },
      992: { slidesPerView: 1, spaceBetween: 24 },
      1024:{ slidesPerView: 1, spaceBetween: 28 },
       }
  

    });
   
