$(document).ready(function () {
  $(window).on("scroll", function () {
    const pos = $(window).scrollTop();
    $("header").toggleClass("active", pos > 50);
  });
});
