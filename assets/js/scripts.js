jQuery(document).ready(($) => {
  $("select").niceSelect();

  $(".clients-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
  });
});
