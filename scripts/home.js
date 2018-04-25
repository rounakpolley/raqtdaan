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

//---------- adjusting side navs
    function hide_all_sidenavs(){
        $('#donors').next().addClass('hidden');
        $('#blood_banks').next().addClass('hidden');
        $('#camps').next().addClass('hidden');
        $('#request_for_blood').next().addClass('hidden');
    }
    function open_sidenav(no){
        hide_all_sidenavs();
        switch(no){
            case 1:{    $('#donors').next().removeClass('hidden');                      break;  }
            case 2:{    $('#blood_banks').next().removeClass('hidden');                 break;  }
            case 3:{    $('#camps').next().removeClass('hidden');                       break;  }
            case 4:{    $('#request_for_blood').next().removeClass('hidden');           break;  }
        }
    }
    $('#background-map').click(function(evt){
        hide_all_sidenavs();
    });
    var sidenav_id = "";
    $('.sidenav-content').click(function(evt){
        sidenav_id = $(this).attr('id');
        var sidenav_1_open = false, sidenav_2_open = false, sidenav_3_open = false, sidenav_4_open = false;
        
        if(sidenav_id == "donors"){
            if(sidenav_1_open){
                sidenav_1_open = false;
                hide_all_sidenavs();
            }
            else{
                sidenav_1_open = true;
                open_sidenav(1);
            }
        }
        else if(sidenav_id == "blood_banks"){
            if(sidenav_2_open){
                sidenav_2_open = false;
                hide_all_sidenavs();
            }
            else{
                sidenav_2_open = true;
                open_sidenav(2);
            }
        }
        else if(sidenav_id == "camps"){
            if(sidenav_3_open){
                sidenav_3_open = false;
                hide_all_sidenavs();
            }
            else{
                sidenav_3_open = true;
                open_sidenav(3);
            }
        }
        else if(sidenav_id == "request_for_blood"){
            if(sidenav_4_open){
                sidenav_4_open = false;
                hide_all_sidenavs();
            }
            else{
                sidenav_4_open = true;
                open_sidenav(4);
            }
        }
    });

});
