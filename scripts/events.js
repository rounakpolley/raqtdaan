$(document).ready(function()
{
    $('#event-registration').click(function()
    {
        $('html, body').animate({ scrollTop: $('#registration-form-header').offset().top - 150 }, 1000);
    });
    $('#registration-form-submit').click(function()
    {
        /*Required form field validation & submission
            It's implementation dependent so*/
    });
});