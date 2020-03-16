$('.ancla').on('click', function(e){
  e.preventDefault();
  var strAncla = '#' + $(this).data('ancla');
  $('html,body').animate({scrollTop: $(strAncla).offset().top}, 2000);
  });

  /*Boton ir arriba*/
  $(document).ready(function(){
 
    $('.ir-arriba').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 2000);
    });
   
    $(window).scroll(function(){
      if( $(this).scrollTop() > 0 ){
        $('.ir-arriba').slideDown(300);
      } else {
        $('.ir-arriba').slideUp(300);
      }
    });
   
  });
