const mySwiper= new Swiper('.swiper',{
    loop: true,
    slidesPerView: 3,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
gsap.to("button", { 
    scrollTrigger: {
        trigger: "button",
        start: "top 80%",
    },
  y:300,
    duration:2,
    ease:"bounce.out"
});