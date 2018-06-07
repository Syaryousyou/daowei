$(function () {
  var $header = $('.header')
  $(window).scroll(function () {
    if (($(this).scrollTop() >= 71)) {
      $header.addClass('active')
    } else {
      $header.removeClass('active')
    }
  })
})