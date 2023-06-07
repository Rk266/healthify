(function ($) {
    'use strict';

    /*---WOW active js ---- */
    new WOW().init();
})(jQuery);

// slider_1

var owl = $('.owl-carousel-banner');
owl.owlCarousel({
    padding: 0,
    margin: 0,
    loop: true,
    nav: true,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

//slider 2
var owl2 = $('.owl-carousel-cat');
owl2.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    dots: false,
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        512: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// product slider_1
var owl2 = $('.owl-carousel-product');
owl2.owlCarousel({

    margin: 0,
    loop: true,
    nav: true,

    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    dots: false,
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1400: {
            items: 4
        }
    }
})

// <!-- testimonial -->
    var owl2 = $('.owl-carousel-testimonial');
    owl2.owlCarousel({

        margin: 0,
        loop: true,
        nav: false,

        navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
        dots: true,
        autoplay: false,
        animateOut: 'fadeOut',
        autoplayTimeout: 3000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })

//blog
var owl = $('.owl-carousel-blog');
owl.owlCarousel({
    padding: 0,
    margin: 0,
    loop: true,
    nav: true,
    dots: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})


// manufacture
var owl2 = $('.owl-carousel-manufacturer');
owl2.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    dots: false,
    autoplay: true,
    animateOut: 'fadeOut',
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        512: {
            items: 1
        },
        812: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// product page slider
var owl2 = $('.owl-carousel-product_page');
owl2.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true">', '<i class="fa fa-angle-right" aria-hidden="true">'],
    dots: false,
    autoplay: false,
    animateOut: 'fadeOut',
    autoplayTimeout: 3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 3
        },
        512: {
            items: 3
        },
        812: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

/*----------
Footer Toggle
----------*/
function footerExplanCollapse() {
    $(".footer-top h5").addClass('toggled');
    $('.footer-top .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            $(this).parent().find('ul').toggleClass('active').toggle('slow');
        }
    });
}

// shop page
$(function () {
    $(".parent .fa.fa-plus").remove();
    $(".parent .toggled").append("<i class='fa fa-plus'></i>");
    $('.parent .toggled').click(function (e) {
        e.preventDefault();
        if (!$(this).parent().hasClass('active')) {
            $('+ ul', $('a.list-group-item.main-item')).slideUp();
            $('a.list-group-item.main-item').removeClass('active');
        }
        $(this).parent().toggleClass('active');
        $('+ ul', $(this).parent()).slideToggle('slow');
        return false;
    });
});
/*----------
    Update column & content in responsive
    -----------*/
function updateColumnsAndContent() {
    if ($(window).width() < 992) {
        $('#column-left, #column-right').insertAfter('#content');

        // left, right
        $("#column-left .box-category .toggle-open, #column-right .box-category .toggle-open, #column-left .box-content .toggle-open, #column-right .box-content .toggle-open").remove();
        $("#column-left .box-category h3, #column-right .box-category h3, #column-left .box-content h3, #column-right .box-content h3").append("<span class='toggle-open'><i class='fa fa-chevron-down'></i></span>");
        $('#column-left ul.parent, #column-right ul.parent, #column-left .block_box, #column-right .block_box, #column-left .box-content ul, #column-right .box-content ul, #column-left .filter_box, #column-right .filter_box').hide();

    } else {
        $('#column-right').insertAfter('#content');
        $('#column-left').insertBefore('#content');
        
        // left, right
        $("#column-left .box-category .toggle-open, #column-left .box-content .toggle-open").remove();
        $("#column-right .box-category .toggle-open, #column-right .box-content .toggle-open").remove();
        $('#column-left ul.parent, #column-right ul.parent, #column-left .block_box, #column-right .block_box, #column-left .box-content ul, #column-right .box-content ul, #column-left .filter_box, #column-right .filter_box').show();
    }
}

/*----------
Category page click events (sidebar)
----------*/

function clickEventsInCategoryPage() {
    $('.box-category .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            $(this).parent().find('ul.parent').toggleClass('active').slideToggle('slow');
        }
    });

    $('#column-left .box-content .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            if ($(this).parent().find('ul').length != 0) {
                $(this).parent().find('ul').toggleClass('active').slideToggle('slow');
            } else {
                $(this).parent().find('.filter_box').toggleClass('active').slideToggle('slow');
                $(this).parent().find('.block_box').toggleClass('active').slideToggle('slow');
            }
        }
    });

    $('#column-right .box-content .toggled').on('click', function (e) {
        e.preventDefault();
        if ($(window).width() < 992) {
            $(this).toggleClass('active');
            if ($(this).parent().find('ul').length != 0) {
                $(this).parent().find('ul').toggleClass('active').slideToggle('slow');
            } else {
                $(this).parent().find('.filter_box').toggleClass('active').slideToggle('slow');
                $(this).parent().find('.block_box').toggleClass('active').slideToggle('slow');
            }
        }
    });
}

$(document).ready(function () {
    // navbar 
    $(".currency_name").click(function () {
        $(".currency_list").slideToggle("slow");
    });

    $("#search_icon").click(function () {
        $("#input_group").slideToggle("slow");
        $("#search_icon").toggleClass('active')
    });


    // shop page 
    $(".icon-grid").click(function () {
        $("#product-list").show();
        $("#product_grid").hide();
    });
    $(".icon-list").click(function () {
        $("#product-list").hide();
        $("#product_grid").show();
    });

    updateColumnsAndContent();

    clickEventsInCategoryPage();

    var headerfixed = 1;
    if (headerfixed == 1) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 160) {
                $('header').addClass('header-fixed');
            } else {
                $('header').removeClass('header-fixed');
            }
        });
    }
    else {
        $('header').removeClass('header-fixed');
    }

    // footer
    footerExplanCollapse();

    // product page slider
    
    // if($(window).width() > 991) {
    //     $("#prozoom").elevateZoom({
    //         zoomType: "inner",
    //         cursor: "crosshair",
    //         gallery:'additional-carousel',
    //         galleryActiveClass: 'active'
    //     });   
      
    //     var image_index = 0;
    //     $('#additional-carousel a').click(function() {
    //         var smallImage = $(this).attr('data-image');
    //         var largeImage = $(this).attr('data-zoom-image');
    //         var ez = $('#prozoom').data('elevateZoom');
    //         $('.product-content .thumbnail').attr('href', largeImage);
    //         ez.swaptheimage(smallImage, largeImage);
    //         image_index = $(this).index('#additional-carousel a');
    //         return false;
    //     });
    // }
});


jQuery(window).resize(function () {
    updateColumnsAndContent();
});


// produc page slider

jQuery(".additional-carousel a.elevatezoom-gallery").click(function (e) {
    e.preventDefault();
    var this_img_src = jQuery(this).attr("data-zoom-image");
    jQuery("#prozoom").attr("src", this_img_src);
    return;
  });
  





