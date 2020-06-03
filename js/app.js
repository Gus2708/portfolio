$(document ).ready(function(){
  /*preloader*/ 

  $(window).ready(function(){
    $('.lds-ripple .loader-nombre').fadeOut();
    $('#loader-wrapper').delay(1000).fadeOut('slow');
  });

  $('.menu a').each(function(index, elemento){
    $(this).css({
        'opacity': '0'
    });
    $(this).animate({'opacity': '1'}, 2500 + (index * 500));
    });

    if( $(window).width()> 800 ){
      $('header .contenedor-texto .texto').css({
          opacity: '0',
          left: '-100px'
      });

      $('header .contenedor-texto .texto').animate({
          opacity: '1',
          left: '0'
      }, 1999, function(){
        
      } );



      $('header .contenedor-texto .texto h1, h2').each(function(){
        $(this).css({
          left: '-80px',
          opacity: '0'
        });

        $(this).animate({
          left: '-10px',
          opacity: '1'
        }, 2999);


      });

  };

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
        $('.ir-arriba').fadeIn(300);
      } else {
        $('.ir-arriba').fadeOut(300);
      }
    });
   
  });

  

  });
