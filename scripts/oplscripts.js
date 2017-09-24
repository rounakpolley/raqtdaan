$(document).ready(function()
{   
    var scroll_start = 0;               //starting point of scroll
    //mobile menu...
    $('.navbar-toggle').click(function(evt)
    {  
        $('.navbar-collapse').toggleClass('nav-mobile-slide');
        $('.navbar-collapse.navbar-right.nav-mobile-slide.collapse.in').css('margin-top', '-52px');
    });
    $('[data-toggle="slide-collapse"]').on('click', function(evt)    
    {
        (evt.data('target')).toggle('slide', { direction: "left"  }, 500 );
    });
    
    $(document).scroll(function()
    { 
            scroll_start = $(this).scrollTop(); //current vertical position of the scroll bar
            if(scroll_start < 53)
            {   $('.navbar-collapse.navbar-right.nav-mobile-slide.collapse.in').css('margin-top', -scroll_start); 
            }
            else
            {   $('.navbar-collapse.navbar-right.nav-mobile-slide.collapse.in').css('margin-top', '0px'); }
     });
    //contact section nav-events
    $('#nav-contact').click(function(evt)
    {
        evt.preventDefault();
        $('#contact-section').toggleClass('visible');
    });
    $('.modal ').click(function()
    {       $('#contact-section').removeClass('visible');       });                                            
    $('.modal-content').click(function(evt)
    {       evt.stopPropagation();                              });                                           

    //behaviour of navbar-brand is same in all the pages
    $('.navbar-brand').click(function(evt)
    {   evt.preventDefault();   $('html, body').animate({ scrollTop: $('#banner-area').offset().top }, 1000); });
});