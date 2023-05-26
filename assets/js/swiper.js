const swiper = new Swiper('.swiper-main', {
    // Optional parameters
    //direction: 'vertical',
    slidesPerView: 1,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    //autoplay: {
    //  delay: 4500,
    //  disableOnInteraction: false,
    //},
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const editorsPick = new Swiper('.editors-pick', {
    // Optional parameters
    
    slidesPerView: 1,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-editors',
      prevEl: '.swiper-button-prev-editors',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const smallBlogs = new Swiper('.small-3perview-blogs', {
    //slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const test = new Swiper('.test', {
    
    slidesPerView: 1,
    //spaceBetween: 30,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });