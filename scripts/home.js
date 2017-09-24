$(document).ready(function()
{
    $('#hot-event').fadeOut( 1 );
    $('#hot-event').fadeIn( 2000 );
    $('#nav-about').click(function(evt)
    {   evt.preventDefault();   $('html, body').animate({ scrollTop: $('#home-about').offset().top - 120 }, 1000);  });
    $('#nav-services').click(function(evt)
    {   evt.preventDefault();   $('html, body').animate({ scrollTop: $('#home-services').offset().top - 70 }, 1000);});
    
    $('#nav-events').click(function(evt)
    {
        $('html, body').animate({ scrollTop: $('#event-promotion').offset().top - 100 }, 1000);
    });
    //fix the active class of upcoming events
    $('#explore').click(function(evt)
    {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $('#home-about').offset().top - 120 }, 1000);
    });
    $('#hot-event').click(function(evt)
    {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $('#event-promotion').offset().top - 120 }, 1000);
    });
});