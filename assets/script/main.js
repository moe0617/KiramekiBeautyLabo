// カルーセル
$('.voices__slick__slide').slick({
    infinite: true,
    dots: false,

    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    valiableWdth: true,
    centerPadding: '32px',
    autoplay: true,
    autoplaySpeed: 7000,

    responsive: [{
        breakpoint: 768,
        settings: {
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        },
    },
    ]
});