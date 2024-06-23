$(document).ready(function () {

    $('.header-news-slide').slick({
        prevArrow: '<button class="custom-prev slick-arrow" id="custom-prev"><svg class="scope-custom-icon" role="none" focusable="false" aria-hidden="true"><use xlink:href="#icon--arrow-left" ></use></svg></button>',
        nextArrow: '<button class="custom-next slick-arrow" id="custom-next"><svg class="scope-custom-icon" role="none" focusable="false" aria-hidden="true"><use xlink:href="#icon--arrow-right" ></use></svg></buttom>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    // --------------------------------- hover--------------------------------

    $(".help-icon button").mouseenter(function () {
        $(".help-icon .help-list").toggle();
    });

    $('.menu-item').hover(function () {
        $(this).siblings().children('button').css('--underline-width', $('.menu-item>button').width());
        $(this).siblings().children('button').css('color', '#767676');
    }, function () {
        $(this).siblings().children('button').css('color', '#000');
    });

    // tim kiem
    $('.header-search__toggle').click(function () {
        $(this).toggleClass('set--search-shown');
        if ($('.header').css('position') == 'relative') {
            $('.header-search__scrollable-col').css('height', 'calc(100vh - 115.55px)')
        } else if ($('.header').css('position') == 'fixed') {
            $('.header-search__scrollable-col').css('height', 'calc(100vh - 60px)')
        }
        $('.header-search__dropdown').slideToggle();
        if (scoll) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'auto');
        }
        scoll = !scoll;
    });
    $('.header-favorites__link').click(function () {
        $(this).toggleClass('favorited');
    });


    function toggleHeart(event) {
        var heartIcon = event.target;

        if (heartIcon.classList.contains("far")) {
            heartIcon.classList.remove("far");
            heartIcon.classList.add("fa");
        } else {
            heartIcon.classList.remove("fa");
            heartIcon.classList.add("far");
        }
    }

    var heartIcons = document.querySelectorAll(".tim");

    heartIcons.forEach(function (heartIcon) {
        heartIcon.addEventListener("click", toggleHeart);
    });

    $('.list-new-arrival').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $(".abc").hide();
    jQuery(".title_shopping").click(function () {
        jQuery(this).find(".abc").slideToggle();
        console.log($(".title_shopping").attr("id"));
    })

    $(".title_img").click(function () {
        const plus_minus = $(this).find("img");
        const img_src = plus_minus.eq(0).attr("src");
        plus_minus.eq(0).attr("src", plus_minus.eq(1).attr("src"));
        plus_minus.eq(1).attr("src", img_src);
    });





});