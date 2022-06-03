$(document).ready(function(){
    $('.header .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        margin:10,
        rtl:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.pices .model h3').first().click(function(){
        $(this).css({
            "color" : "#49DBE1" 
        }).siblings().css({
            "color" : "#A2A2A2"
        });
        $('.pices .new').show();
        $('.pices .used').hide()
    })
    $('.pices .model h3').last().click(function(){
        $(this).css({
            "color" : "#49DBE1" 
        }).siblings().css({
            "color" : "#A2A2A2"
        });
        $('.pices .used').show();
        $('.pices .new').hide()
    })
    $('.serv .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        rtl : true ,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });
    $('.gallery .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        rtl :true ,
        loop:true,
        margin:16,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            560:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    $('.support .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        rtl :true ,
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            560:{
                items:4
            },
            1000:{
                items:6
            }
        }
    });
    $('.car-ask .ask .bottom .mb-3 .inp').click(function(){
        $(this).find('span').css({
            "border" : "1px solid #49DBE1"
        })
    });
    $('.car-herag .owl-carousel').owlCarousel({
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        loop:true,
        rtl : true ,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.car-buy .right .cont .clos').click(function(){
        $(this).parent().hide()
    });
    $('.car-person .person .bottom .input-group .input-field input').focus(function(){
        $(this).css({
            "border" : "1px solid #49DBE1" ,
            "border-left" : "none"
        }).siblings().css({
            "border" : "1px solid #49DBE1" ,
            "border-right" : "none"
        })
    });
    $('.car-person .person .bottom .input-group .input-field input').blur(function(){
        $(this).css({
            "border" : "1px solid #C2C2C2" ,
            "border-left" : "none"
        }).siblings().css({
            "border" : "1px solid #C2C2C2" ,
            "border-right" : "none"
        })
    });
    $('.car-person .person .one button').click(function(){
        $('.car-person .person .top ').find('.t').css({
            "background-color" : "#49DBE1" ,
            "color" : "white"
        }).parent().siblings().find('.icon').css({
            "background-color" : "white" ,
            "color" : "#49DBE1" ,
            "border" : "1px solid #DEFEFF"
        });
        $('.car-person .person .two').show();
        $('.car-person .person .one').hide();
    });
    // new WOW().init();
})