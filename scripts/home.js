$(document).ready(function(){   
    //mobile menu...
    $('.navbar-toggle').click(function(evt){  
        $('.navbar-collapse').toggleClass('nav-mobile-slide');
        $('.navbar-collapse.navbar-right.nav-mobile-slide.collapse.in').css('margin-top', '-52px');
    });
    $('[data-toggle="slide-collapse"]').on('click', function(evt){
        (evt.data('target')).toggle('slide', { direction: "left"  }, 500 );
    });
    
    //contact section nav-events
    $('#nav-register').click(function(evt){
        evt.preventDefault();
        $('#donor-register').toggleClass('visible');
    });
    $('.modal').click(function(){
        $('#donor-register').removeClass('visible');       
    });                                            
    $('.modal-content').click(function(evt){
        evt.stopPropagation();
    });

});
