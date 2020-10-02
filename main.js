$(function(){

  var mySwiper = new Swiper ('.swiper-container', {
    // オプションパラメータ(一部のみ抜粋)
    loop: true, // 最後のスライドまで到達した場合、最初に戻らずに続けてスライド可能にするか。
    speed: 100, // スライドが切り替わるトランジション時間(ミリ秒)。
    slidesPerView: 3, // 何枚のスライドを表示するか
    spaceBetween: 10, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'slide', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
 
    // スライダーの自動再生
    // autoplay: true 　のみなら既定値での自動再生
    autoplay: {
      delay: 3000, // スライドが切り替わるまでの表示時間(ミリ秒)
      stopOnLast: false, // 最後のスライドまで表示されたら自動再生を中止するか
      disableOnInteraction: true // ユーザーのスワイプ操作を検出したら自動再生を中止するか
    },
    pagination: {
      el: '.swiper-pagination',　 // ページネーションを表示するセレクタ
    },
 
    // 前後スライドへのナビゲーションを表示する場合
    navigation: {
      nextEl: '.swiper-button-next', // 次のスライドボタンのセレクタ
      prevEl: '.swiper-button-prev', // 前のスライドボタンのセレクタ
    },
    breakpoints: {
      // 640ピクセル幅以下になったら
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    },

 
  });
});

$(function () {
  // 最初のコンテンツ以外は非表示
  $(".accordion-content:not(:first-of-type)").css("display", "none");
  // 矢印の向きを変えておく
  $(".accordion-title:first-of-type").addClass("open");
 
  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});

 

