searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick  = () =>{
    loginForm.classList.remove('active');
}

window.onscroll = ()=>{
    searchForm.classList.remove('active');
    if(window.scrollY > 80){
        document.querySelector('.header .header-2') .classList.add('active');
    }else{
        document.querySelector('.header .header-2') .classList.remove('active');
    }
    
}
window.onload = ()=>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2') .classList.add('active');
    }else{
        document.querySelector('.header .header-2') .classList.remove('active');
    }
    
}


var swiper = new Swiper(".book-slider",  {
    loop:true,
   centeredSlides:true,
   autoplay:{
    delay:40000,
    disableOnInteraction: false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    allowTouchMove:false
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
     delay: 2500,
     disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       450: {
        slidesPerView: 2,
      },
       768: {
         slidesPerView: 3,
       },

       1024: {
        slidesPerView: 4,
      },
     },
      allowTouchMove:false
   });
