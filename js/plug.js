$(document).ready(function(){
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop();
        var ab = $('.about').offset().top
        if (src >= ab - 100) {
            $('.about .left .stat .cont .one').prop('counter' , 0).animate({
            counter : 15263 
        } , {
            duration : 5000 ,
            easing : "linear" ,
            step : function(e) {
                $(this).text(Math.ceil(e))
            }
        })
        $('.about .left .stat .cont .two').prop('counter' , 0).animate({
            counter : 55263 
        } , {
            duration : 5000 ,
            easing : "linear" ,
            step : function(e) {
                $(this).text(Math.ceil(e))
            }
        })
        $('.about .left .stat .cont .three').prop('counter' , 0).animate({
            counter : 13663 
        } , {
            duration : 5000 ,
            easing : "linear" ,
            step : function(e) {
                $(this).text(Math.ceil(e))
            }
        })
        }
    });
})