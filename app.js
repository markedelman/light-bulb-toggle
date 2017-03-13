// your code here

$(function handleBulbClicks() {
  $('.js-lightbulb').click(function(event){
    $('.js-lightbulb').removeClass('bulb-on');
 $(this).addClass('bulb-on');
  });
});
