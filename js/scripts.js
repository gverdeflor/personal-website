$(document).ready(function(){

    // Loading animation effect
    $(window).on('load', function() {
        $('.loading').fadeOut(3000);
    })

    // Navbar scroll effect
    $(window).scroll(function(){
        if(this.scrollY > 50) {
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else {
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });

    // Hamburger navbar toggle effect
    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    // Go to top arrow effect
    $(".goTop").click(function(){scroll(0,0)});

}); 