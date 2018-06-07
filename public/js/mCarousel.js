$(function () {
  var $lis = $('.carousel .banner > .slide > .list > .item')
  var $points = $('.carousel .banner > .point > .pointList > .pointItem')
  banner()
  function banner() {
    var num = 0
    clearInterval(timeId)
    var timeId = setInterval(function () {
      $($lis[num]).removeClass('active')
      $($points[num]).removeClass('active')
      num++
      if (num === $lis.length) {
        num = 0
      }
      $($lis[num]).addClass('active')
      $($points[num]).addClass('active')
    },3000)
  }
})