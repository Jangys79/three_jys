$(document).ready(function(){

    let wt = $(window).width();
    if(wt < 1240 ){
        mo()

    }else{
        pc()

    }

/*모바일 함수*/
    function mo(){
      var swiper = new Swiper(".box1 .mySwiper", {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


      // 1. 한개 섹션 고정시키기 - 섹션1번이 고정
    const panel = document.querySelector(".M_section");

      // 2. 여러개 섹션 고정시키기

    gsap.utils.toArray(".item").forEach((panel,i)=>{
          ScrollTrigger.create({
              trigger:panel,
              start: "top top",
              pin: true,
              pinSpacing:false //오버랩 방지
          })
      })



 

      
      

      




    }/*모바일 끝*/






    function pc(){

      var swiper = new Swiper(".box1 .mySwiper", {
        slidesPerView: 1,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });//box1
      

      const ani9 = gsap.timeline();

      ani9.to("#section9 .f_M_section_pc", {
          scale: 13,      // 원하는 크기로 조절
          autoAlpha: 0,    // 투명도로 사라짐
          duration: 1.5      // 애니메이션 시간
      });

      ScrollTrigger.create({
          animation: ani9,
          trigger: "#section9",
          start: "top top",    // 스크롤 시작 위치
          end: "+=800",       // 애니메이션 지속 범위
          scrub: true,         // 스크롤에 따라 애니메이션 속도 조절
          pin: true,           // 섹션 고정
          //markers: true        // 디버깅용 마커 표시
      });

         // 1. 한개 섹션 고정시키기 - 섹션1번이 고정
    const pane2 = document.querySelector("#section9");

    // 2. 여러개 섹션 고정시키기

    gsap.utils.toArray(".box1").forEach((pane2,i)=>{
          ScrollTrigger.create({
              trigger:pane2,
              start: "top top",
              pin: true,
              pinSpacing:false //오버랩 방지
          })
      })





    
    }//pc함수


    AOS.init();

  

})//document