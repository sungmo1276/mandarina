$(document).ready(function () {
  $("a").click(function (e) {
    e.preventDefault();
  });

  var current = 0;
  // 네비게이션///////////////////////////////////////////
  $(".subb").hide();
  $(".header_navv>li").mouseover(function () {
    var i = $(this).index();
    $(".subb_li").find(".a").hide();
    $(".subb_li").find(".a").eq(i).show();

    $(this)
      .stop()
      .find(".subb")
      .show()
      .css({ opacity: "0" })
      .animate({ opacity: "1" });
    $(".header_navv>li>a").removeClass("act");
    $(this).find("a").addClass("act");

    $(".subb>li").hover(
      function () {
        $(this).find("a").addClass("act2");
      },
      function () {
        $(this).find("a").removeClass("act2");
      }
    );

    $(".subb").mouseleave(function () {
      $(".subb").hide();
    });
    $(".header_navv>li").mouseleave(function () {
      $(".subb").hide();
    });
  });

  // 상단메인슬라이드///////////////////////////////////////////

  $(".btn li").eq(0).addClass("on");

  $(".btn li").click(function (e) {
    e.preventDefault();
    var i = $(this).index();
    move(i);
  });

  $(".tri_right").click(function (e) {
    e.preventDefault();
    var num = current + 1;
    if (num == 3) {
      num = 0;
    }
    move(num);
  });

  $(".tri_left").click(function (e) {
    e.preventDefault();
    var num = current + 1;
    if (num == 3) {
      num = 0;
    }
    move2(num);
  });

  function move(i) {
    if (i == current) return;
    var currentEl = $(".list li").eq(current);
    var nextEl = $(".list li").eq(i);
    currentEl.css({ left: "0%" }).animate({ left: "-100%" });
    nextEl.css({ left: "100%" }).animate({ left: "0%" });
    current = i;
    $(".btn li").removeClass("on");
    $(".btn li").eq(i).addClass("on");
  }
  function move2(i) {
    if (i == current) return;
    var currentEl = $(".list li").eq(current);
    var nextEl = $(".list li").eq(i);
    currentEl.css({ left: "0%" }).animate({ left: "100%" });
    nextEl.css({ left: "-100%" }).animate({ left: "0%" });
    current = i;
    $(".btn li").removeClass("on");
    $(".btn li").eq(i).addClass("on");
  }
});

/////////하단슬라이드1///////////////////////////////////////////////////////////////
$(document).ready(function () {
  var current2 = 0;
  $(".best2_title2>button").eq(0).addClass("onn");

  $(".best2_title2>button").click(function (e) {
    e.preventDefault();
    var k = $(this).index();
    move(k);
  });

  $(".tri_right2").click(function (e) {
    e.preventDefault();
    var nums = current2 + 1;
    if (nums == 3) {
      nums = 0;
    }
    move(nums);
  });

  $(".tri_left2").click(function (e) {
    e.preventDefault();
    var nums = current2 + 1;
    if (nums == 3) {
      nums = 0;
    }
    move2(nums);
  });

  function move(k) {
    if (k == current2) return;
    var currentEl2 = $(".list2 li").eq(current2);
    var nextEl2 = $(".list2 li").eq(k);
    currentEl2.css({ left: "0%" }).animate({ left: "-100%" });
    nextEl2.css({ left: "100%" }).animate({ left: "0%" });
    current2 = k;
    $(".best2_title2>button").removeClass("onn");
    $(".best2_title2>button").eq(k).addClass("onn");
  }
  function move2(k) {
    if (k == current2) return;
    var currentEl2 = $(".list2 li").eq(current2);
    var nextEl2 = $(".list2 li").eq(k);
    currentEl2.css({ left: "0%" }).animate({ left: "100%" });
    nextEl2.css({ left: "-100%" }).animate({ left: "0%" });
    current2 = k;
    $(".best2_title2>button").removeClass("onn");
    $(".best2_title2>button").eq(k).addClass("onn");
  }
});

////////하단슬라이드2//////////////////////////////////////////////////////////////
$(document).ready(function () {
  var current3 = 0;
  $(".ranking2_title2>button").eq(0).addClass("no");

  $(".ranking2_title2>button").click(function (e) {
    e.preventDefault();
    var j = $(this).index();
    move(j);
  });

  $(".tri_right3").click(function (e) {
    e.preventDefault();
    var numss = current3 + 1;
    if (numss == 3) {
      numss = 0;
    }
    move(numss);
  });

  $(".tri_left3").click(function (e) {
    e.preventDefault();
    var numss = current3 + 1;
    if (numss == 3) {
      numss = 0;
    }
    move2(numss);
  });

  function move(j) {
    if (j == current3) return;
    var currentEl3 = $(".list5 li").eq(current3);
    var nextEl3 = $(".list5 li").eq(j);
    currentEl3.css({ left: "0%" }).animate({ left: "-100%" });
    nextEl3.css({ left: "100%" }).animate({ left: "0%" });
    current3 = j;
    $(".ranking2_title2>button").removeClass("no");
    $(".ranking2_title2>button").eq(j).addClass("no");
  }
  function move2(j) {
    if (j == current3) return;
    var currentEl3 = $(".list5 li").eq(current3);
    var nextEl3 = $(".list5 li").eq(j);
    currentEl3.css({ left: "0%" }).animate({ left: "100%" });
    nextEl3.css({ left: "-100%" }).animate({ left: "0%" });
    current3 = j;
    $(".ranking2_title2>button").removeClass("no");
    $(".ranking2_title2>button").eq(j).addClass("no");
  }
});
///////////////////세로네비//////////////////////////////////////////
$(document).ready(function () {
  $(".sero_sub").hide();
  $(".sero >li").eq(0).find(".sero_sub").show();

  $(".sero_btn").click(function () {
    $(".sero_sub").hide();
    $(this).next().show();
    $(".sero_btn").removeClass("ok");
    $(".sero_btn").removeClass("ok1");
    $(this).addClass("ok1");
  });

  $(".sero_btn").hover(
    function () {
      $(this).addClass("ok");
    },
    function () {
      $(this).removeClass("ok");
    }
  );

  $(".sero_sub li").mouseover(function () {
    $(this).find("a").addClass("actt");
  });
  $(".sero_sub li").mouseout(function () {
    $(this).find("a").removeClass("actt");
  });

  $(window).scroll(function () {
    const windowTop = $(window).scrollTop() + 300;
    $(".sero")
      .stop()
      .animate({ top: windowTop + "px" }, 0);
  });
});
////////////////////480 상단로그인 띄우기////////////////////////
$(document).ready(function () {
  $(".group_title").hide();

  $(".group_m").click(function () {
    $(".group_title").show();
  });
  $(".group_close").click(function () {
    $(".group_title").hide();
  });
});
