$(document).ready(function() {
  let wt = $(window).width();
  let swiper;

  function initializeSwiper() {
      if (wt < 768) {
          mo();
      } else {
          pc();
      }
  }

  function mo() {
      swiper = new Swiper(".box2 .mySwiper", {
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

      // 마우스 휠 이벤트
      addMouseWheelEvent();
  }

  function pc() {
      swiper = new Swiper(".box2 .mySwiper", {
          slidesPerView: 2,
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

      // 마우스 휠 이벤트
      addMouseWheelEvent();
  }

  function addMouseWheelEvent() {
      $(".box1").on("mousewheel", function(e, d) {
          // 마우스 휠을 내렸을 때
          if (d < 0) {
              let nxt = $(this).next();
              if (nxt.length) {
                  let nxtTop = nxt.offset().top;
                  $("html, body").stop().animate({ "scrollTop": nxtTop }, 600); // 애니메이션 시간 조정
              }
          } else if (d > 0) {
              // 마우스 휠을 올렸을 때
              let pre = $(this).prev();
              if (pre.length) {
                  let preTop = pre.offset().top;
                  $("html, body").stop().animate({ "scrollTop": preTop }, 600); // 애니메이션 시간 조정
              }
          }
      });
  }

  initializeSwiper();

  // 리사이즈 이벤트 추가
  $(window).resize(function() {
      wt = $(window).width();
      swiper.destroy(); // 기존 Swiper 인스턴스 파괴
      initializeSwiper(); // 새로운 Swiper 초기화
  });

});