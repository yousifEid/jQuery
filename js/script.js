$(document).ready(function () {
  $(".opennav").click(function () {
    $("#leftmenu").fadeIn(300);
    $("#leftmenu").animate({ width: "250px" }, 500);
    $("#home-content").animate({ marginLeft: "250px" }, 500);
  });

  $(".closebtn").click(function () {
    $("#leftmenu").animate({ width: "0" }, 500, function () {
      $("#leftmenu").hide();
    });
    $("#home-content").animate({ marginLeft: "0" }, 500);
  });
});

$(document).ready(function () {
  $(".toggle").click(function () {
    $(this).next(".inner").slideToggle();
  });
});

var endDate = new Date("10/25/2023").getTime();
// لتحديث العد التنازلي كل ثانية
var timer = setInterval(function () {
  // الوقت الحالي
  var now = new Date().getTime();

  // فترة الوقت المتبقية بين الوقت الحالي وتاريخ الهدف
  var timeRemaining = endDate - now;

  // حساب الأيام والساعات والدقائق والثواني المتبقية
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // تحديث عرض الأيام والساعات والدقائق والثواني في الصفحة
  $(".days").text(days + " d");
  $(".hours").text(hours + " h");
  $(".minutes").text(minutes + " m");
  $(".seconds").text(seconds + " s");

  // عندما ينتهي العد التنازلي، يتم إيقاف التحديث
  if (timeRemaining < 0) {
    clearInterval(timer);
    $(".count-overlay").text("انتهى العد التنازلي");
  }
}, 1000);

$(document).ready(function () {
  $("#char-count").keyup(function () {
    var characters = $(this).val().length;
    var remaining = 100 - characters;

    $("#chars").text(remaining);

    if (remaining < 0) {
      $(this).val($(this).val().substring(0, 100));
      $("#chars").text(0);
    }
  });
});
