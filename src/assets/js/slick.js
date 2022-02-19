function myMethod(){
    if(window.screen.width >=992){
        return   $('#slick1').slick({
            rows: 2,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    }
    else if(window.screen.width <=991){
        return   $('#slick1').slick({
            rows: 2,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    }

}

function myMethod2(){
    if(window.screen.width >=992){
        return   $('#slick2').slick({
            rows: 1,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    }
    else if(window.screen.width <=991){
        return   $('#slick2').slick({
            rows: 1,
            dots: false,
            arrows: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $('.prev'),
            nextArrow: $('.next')
        });
    }
}
