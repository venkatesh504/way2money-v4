; (function ($) {
    "use strict"
    console.log("custom entered");
    // var nav_offset_top = $(".header_area").height()+50;
    /*-------------------------------------------------------------------------------
	  Navbar
	-------------------------------------------------------------------------------*/

    //* Navbar Fixed
    function navbarFixed() {

        // if ( $(".header_area").length>=50)
        // {


        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= $(".header_area").height() + 50) {

                $(".header_area").addClass("navbar_fixed");
            } else {

                $(".header_area").removeClass("navbar_fixed");
            }
        });
        // }

    };
    navbarFixed();
})(jQuery)
