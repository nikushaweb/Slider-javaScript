var sliderWidth = $('#slider').width();
var slidesCount = $('.slide').length;
var currentSlide = 1;

$('#slideContainer').css('width', (slidesCount * 100) + '%');
$('.slide').css('width', sliderWidth);

var swichers = '';
for( var i = 1; i <= slidesCount; i++){
  swichers += '<div></div>';
  $('.swicher').append('<div></div>');
}
$('.swicher').html(swichers);
$('.swicher').find('div').eq(0).addClass('selected');

$('.swicher div').on('click', function(){
  goToSlide($(this).index()+1);
})

function goToSlide(n) {
  $('#slideContainer').animate({
      left: -(n-1) * sliderWidth
  }, 500, function() {
    currentSlide = n;
  });
  $('.swicher').find('div').removeClass('selected').eq(n-1).addClass('selected');
}

$('.nav').on('click', function() {
  if ( $(this).hasClass('nav-left') ) {
      if ( currentSlide == 1 ) {
        return;
      }
      goToSlide(currentSlide - 1)
  }
  else {
    if ( currentSlide >= slidesCount ) {
      return;
    }
    goToSlide(currentSlide+1);
  }
});

setInterval(function() {
  if ( currentSlide >= slidesCount ) {
    n = 1;
  }
  else {
    n = (currentSlide + 1);
  }
  goToSlide(n);
}, 5000);
