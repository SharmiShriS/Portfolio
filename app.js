$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

var typed=new Typed(".typing-1",{
    strings:[
        "Developer","Coder",
        "Designer"
    ],
    typeSpeed:80,
    backSpeed:60,
    loop:true
});


var typed=new Typed(".typing-2",{
    strings:[
        "Developer","Coder",
        "Designer"
    ],
    typeSpeed:80,
    backSpeed:60,
    loop:true
});

$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    navigation:true,
    autoplay:true,
    autoTimeOut:1000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1,
            nav: false
        },
        600:{
            items:2,
            nav: false
        },
        1000:{
            items:3,
            nav: false
        }
    }

})

});