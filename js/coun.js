$(document).ready(function(){
    $(window).on('scroll' , function(){
        var src = $(window).scrollTop();
        var coun = $('.countin').offset().top
        if (src >= coun - 200) {
            $('.car-who .countin .row .cont .one').prop('counter' , 0).animate({
            counter : 15263 
        } , {
            duration : 5000 ,
            easing : "linear" ,
            step : function(e) {
                $(this).text(Math.ceil(e))
            }
        })
        $('.car-who .countin .row .cont .two').prop('counter' , 0).animate({
            counter : 55263 
        } , {
            duration : 5000 ,
            easing : "linear" ,
            step : function(e) {
                $(this).text(Math.ceil(e))
            }
        })
        $('.car-who .countin .row .cont .three').prop('counter' , 0).animate({
            counter : 13663 
        } , {
            duration : 5000 ,
            easing : "linear" ,
            step : function(e) {
                $(this).text(Math.ceil(e))
            }
        })
        }
    })
})