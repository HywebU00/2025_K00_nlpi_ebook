mainMenu({
  sticky: true, // 是否置頂
  mega: true, // 是否megaMenu
  needLink: false, // 如果同時需要連結和下層功能時(手機版選單)
});
// -----  基本功能開關   ---------------------------------------------------

// 側邊選單
sideNav({
  needLink: true, // 如果同時需要連結和下層功能時
  float: false, // 切換是否由左側展開或是下方展開
  showDefault: true, // 是否預設顯示
});

// tabFunction({
// target: '.target1', // 執行目標，多組需要另外設定
// modeSwitch: false, // 自動切換，尺寸以上tab功能，尺寸以下手風琴功能
// openContent: false, // 展開所有內容，僅開啟模式切換時才可使用
// openIndex: 0, // 開啟第幾個
// width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
// autoClose: true, // 自動關閉其他開啟內容
// openSwitch: true, // 是否可開合/切換
// });
// tab功能
tabFunction({
  target: '.tabFunction1',
  modeSwitch: true,
});
// tab功能
tabFunction({
  target: '.tabwebSearch',
});
// mp2 新書展示
tabFunction({
  target: '.tabFunction2',
});
// mp2 最新消息
tabFunction({
  target: '.tabFunction3',
  modeSwitch: true, // 自動切換，尺寸以上tab功能，尺寸以下手風琴功能<br />
});

// 手風琴功能
accordionFunction({
  target: '.accordion',
  openContent: false, // 預設先展開所有內容
  openDefault: true, // 是否有預設開啟
  openIndex: 0, // 預設開啟第幾個
  autoClose: true, // 自動關閉其他開啟內容
  openSwitch: true, // 是否可開合/切換
});

window.addEventListener('DOMContentLoaded', () => {
  _toggleDropdown('header .subNavList .language > button', 'header .subNavList .language ul'); //語系開關切換
  _toggleDropdown('header .navList .language > button', 'header .navList .language ul'); //語系開關切換
  _toggleDropdown('#mobileMenu .language > button', '#mobileMenu .language ul'); //語系開關切換手機版
  _toggleDropdown('header .fontSize > button', 'header .fontSize ul'); //文字大小展開開關切換
  _toggleDropdown('.shareBox .share', '.shareBox .shareBoxList'); //分享開關切換
  _toggleDropdown('.contentSearchBtn', '.contentSearchBox', false); //LP 內容搜尋
  _toggleDropdown('.floatNav .floatSwitchBtn', '.floatNav .typeA'); //LP 內容

  // -----  MP2 多筆swiper輪播   ---------------------------------------------------
  const multipleSlider = document.querySelectorAll('.blockTypeG .multipleSlider');

  multipleSlider.forEach((item, index) => {
    let multipleSwiper = new Swiper(item.querySelector('.swiper'), {
      slideToClickedSlide: true,
      slidesPerView: 5,
      watchSlidesProgress: true,
      navigation: {
        nextEl: item.querySelector('.swiperNext'),
        prevEl: item.querySelector('.swiperPrev'),
        disabledClass: 'swiperArrow-disabled', //不可點選樣式
      },
      autoplay: {
        delay: 5000,
      },
      on: {
        init: function (swiper) {
          swiperA11Fn(swiper);
        },
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        767: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });
  });

  // -----  MP 輪播   ---------------------------------------------------
  const mpSlider = new Swiper('.mpSlider .swiper', {
    // 切換點
    pagination: {
      el: '.mpSlider .swiperPagination',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .swiperNext', //自行設定樣式
      prevEl: '.mpSlider .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    autoplay: false,
    // autoplay: {
    //   delay: 5000,
    // },
    on: {
      init: function (swiper) {
        swiperA11Fn(swiper);
      },
    },
  });

  // -----  CP 輪播   ---------------------------------------------------
  const lighBoxSlider = new Swiper('.lighBoxSlider .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    slideToClickedSlide: true,
    loop: false,
    // 切換箭頭
    navigation: {
      nextEl: '.lighBoxSlider .swiperNext', //自行設定樣式
      prevEl: '.lighBoxSlider .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
    autoplay: {
      delay: 5000,
    },
    on: {
      init: function (swiper) {
        swiperA11Fn(swiper);
      },
    },
  });

  // -----  跑馬燈   ---------------------------------------------------
  const marqueeSlider = new Swiper('.marqueeSlider .swiper', {
    // direction: 'horizontal',
    // 切換箭頭
    navigation: {
      nextEl: '.marqueeSlider .swiperNext', //自行設定樣式
      prevEl: '.marqueeSlider .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    freeMode: true,
    // autoplay: {
    //   delay: 5000,
    // },
    on: {
      init: function (swiper) {
        swiperA11Fn(swiper);
      },
    },
    // 切換點
    pagination: {
      el: '.mpSlider .swiperPagination',
      clickable: true,
    },
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一筆淡出，false上一筆不淡出，下一筆疊在上方
    },
    // 切換點
    pagination: {
      el: '.marqueeSlider .swiperPagination',
      clickable: true,
    },
  });

  // 推薦好書
  const recommendedBooks = new Swiper('.recommendedBooks .booksSwiperBox .swiper', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          fill: 'row',
          rows: 1,
        },
      },
      420: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      575: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      767: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      1000: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
    },

    spaceBetween: 0,
    // 切換箭頭
    navigation: {
      nextEl: '.recommendedBooks .booksSwiperBox .swiperNext', //自行設定樣式
      prevEl: '.recommendedBooks .booksSwiperBox .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    // 切換點
    pagination: {
      el: '.recommendedBooks .booksSwiperBox  .swiperPagination',
      clickable: true,
    },
  });
  // 熱門書籍
  const popularBooks = new Swiper('.popularBooks .booksSwiperBox .swiper', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          fill: 'row',
          rows: 1,
        },
      },
      420: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      575: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      767: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      1000: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
    },

    spaceBetween: 0,
    // 切換箭頭
    navigation: {
      nextEl: '.popularBooks .booksSwiperBox .swiperNext', //自行設定樣式
      prevEl: '.popularBooks .booksSwiperBox .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    // 切換點
    pagination: {
      el: '.popularBooks .booksSwiperBox  .swiperPagination',
      clickable: true,
    },
  });

  // 主題書展
  const bookfairSwiperBox = new Swiper('.bookfairSwiperBox .swiper', {
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      430: {
        slidesPerView: 2,
      },
      630: {
        slidesPerView: 3,
      },
      800: {
        slidesPerView: 2,
      },
      1150: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.bookfairSwiperBox .swiperNext', //自行設定樣式
      prevEl: '.bookfairSwiperBox .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  // 主題書展listt
  const bookfairlistSwiperBox = new Swiper('.bookfairlistSwiperBox .swiper', {
    slidesPerView: 4,
    spaceBetween: 40,
    breakpoints: {
      100: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      530: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      630: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.bookfairlistSwiperBox .swiperNext', //自行設定樣式
      prevEl: '.bookfairlistSwiperBox .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });
  // 新進書籍
  const newBooks = new Swiper('.newBooks .booksSwiperBox .swiper', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 0,
    // 若想補空白以完整成組（可選）
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      420: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      575: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      767: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1000: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
    },

    // 切換箭頭
    navigation: {
      nextEl: '.newBooks .booksSwiperBox .swiperNext', //自行設定樣式
      prevEl: '.newBooks .booksSwiperBox .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    // 切換點
    pagination: {
      el: '.newBooks .booksSwiperBox  .swiperPagination',
      clickable: true,
    },
  });
  // 有聲書
  const audioBooks = new Swiper('.audioBooks .booksSwiperBox .swiper', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      420: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      575: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      767: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1000: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
      1200: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
    },

    // 切換箭頭
    navigation: {
      nextEl: '.audioBooks .booksSwiperBox .swiperNext', //自行設定樣式
      prevEl: '.audioBooks .booksSwiperBox .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    // 切換點
    pagination: {
      el: '.audioBooks .booksSwiperBox  .swiperPagination',
      clickable: true,
    },
  });
  // 適讀年級
  const gradeSwiperBox = new Swiper('.gradeSwiperBox .swiper', {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 10,
    // 若想補空白以完整成組（可選）
    breakpoints: {
      100: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      740: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      850: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1100: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1250: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },

    // 切換箭頭
    navigation: {
      nextEl: '.gradeSwiperBox .swiperNext', //自行設定樣式
      prevEl: '.gradeSwiperBox .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });
  // 合作圖書館
  const librariesSwiperBox = new Swiper('.librariesSwiperBox .swiper', {
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true, //無限輪播

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      420: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      575: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 1,
      },
    },

    // 切換箭頭
    navigation: {
      nextEl: '.librariesSwiperBox .swiperNext', //自行設定樣式
      prevEl: '.librariesSwiperBox .swiperPrev', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    // 切換點
    pagination: {
      el: '.librariesSwiperBox  .swiperPagination',
      clickable: true,
    },
  });

  // swiper重整
  $(window).on('resize', function () {
    mpSlider.update();
    recommendedBooks.update();
    popularBooks.update();
    bookfairSwiperBox.update();
    bookfairlistSwiperBox.update();
    newBooks.update();
    audioBooks.update();
    gradeSwiperBox.update();
    librariesSwiperBox.update();
  });
});
//  手機版算main margin-top 高度
$(function () {
  function mainadjustOffset() {
    const winWidth = $(window).width();

    if (winWidth < 992) {
      const fixedHeight = $('header').outerHeight(); // 上方 fixed 區塊的高度
      $('main').css('margin-top', fixedHeight + 'px');
    } else {
      // 992px 以上恢復原狀
      $('main').css('margin-top', '');
    }
  }
  // 頁面載入時執行
  mainadjustOffset();

  // 視窗縮放時也要調整 (避免 RWD 高度改變)
  $(window).on('resize', mainadjustOffset);
});
