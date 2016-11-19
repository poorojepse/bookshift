$(function () {
   owlCarousel();
});


function owlCarousel() {
  $("#slider").owlCarousel({ 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem: true,
      autoPlay: true,
      pagination: false,
      navigation : false
  });
};
