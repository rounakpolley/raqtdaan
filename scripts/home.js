$(document).ready(function(){   
    //mobile menu...
    $('.navbar-toggle').click(function(evt){  
        $('.navbar-collapse').toggleClass('nav-mobile-slide');
        $('.navbar-collapse.navbar-right.nav-mobile-slide.collapse.in').css('margin-top', '-52px');
    });
    $('[data-toggle="slide-collapse"]').on('click', function(evt){
        (evt.data('target')).toggle('slide', { direction: "left"  }, 500 );
    });
    //---
    //nav-events
    $('#nav-register').click(function(evt){
        evt.preventDefault();
        $('#donor-register').toggleClass('visible');
    });
    
    $('#nav-user').click(function(evt){
        evt.preventDefault();
        $('#user-login').toggleClass('visible');
    });
    
    $('.modal').click(function(){
        $('#donor-register').removeClass('visible');
        $('#user-login').removeClass('visible');       
    });                                            
    $('.modal-content').click(function(evt){
        evt.stopPropagation();
    });

    //---  side nav buttons
    $('#donors').click(function(evt){
        $('#donors-contents').toggleClass('hidden');
    });
    $('#blood_banks').click(function(evt){
       $('#blood_banks-contents').toggleClass('hidden');
    });
    $('#camps').click(function(evt){
        $('#camps-contents').toggleClass('hidden');
    });
    $('#request_for_blood').click(function(evt){
        $('#request_for_blood-contents').toggleClass('hidden');
    });

});
