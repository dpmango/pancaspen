$(document).ready(function(){

 	// Prevent # errors
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	// smoth scroll
	$('a[href^="#section"]').click(function(){
        var el = $(this).attr('href');
        $('body, html').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
	});

  // hamburger
  $('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.app').toggleClass('sidebar-active');
  });

  // SLIDER
  var slider = $('#lightSlider').lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: '',
    mode: "slide",
    useCSS: true,
    cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: 'linear', //'for jquery animation',////

    speed: 400, //ms'
    auto: false,
    loop: false,
    slideEndAnimation: true,
    pause: 2000,

    keyPress: false,
    controls: true,
    prevHtml: '',
    nextHtml: '',

    rtl:false,
    adaptiveHeight: true,

    vertical:false,
    verticalHeight:500,
    vThumbWidth:100,

    thumbItem:10,
    pager: true,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: 'middle',

    enableTouch:true,
    enableDrag:true,
    freeMove:true,
    swipeThreshold: 40,
  });

  $('.ico-prev').on('click', function(){
    slider.goToPrevSlide()
  });
  $('.ico-next').on('click', function(){
    slider.goToNextSlide();
  });

  // autocompleate
  var options = {
    url: "json/city.json",
    getValue: "name",
    list: {
      match: {
        enabled: true
      },

      maxNumberOfElements: 8
    },
    template: {
      type: "custom",
      method: function(value, item) {
        return "<span>" + value + ",<span>" + (item.country) + "</span></span>" ;
      }
    }
  };

  $("#cityAutocompleate").easyAutocomplete(options);

  // UI
  $('.ui-dropdown').on('click', '.ui-dropdown__visible', function(){
    $(this).parent().toggleClass('active');
  });
  $('.ui-dropdown__select__option').click(function(){
    var curVal = $(this).data('value');
    $(this).closest('.ui-dropdown').find('.ui-dropdown__visible span').text(curVal);
    $(this).closest('.ui-dropdown').find('.ui-dropdown__visible').addClass('selected');
    $(this).closest('.ui-dropdown').removeClass('active');
  });

  $(document).mouseup(function (e) {
    var container = new Array();
    container.push($('.ui-dropdown'));

    $.each(container, function(key, value) {
        if (!$(value).is(e.target) && $(value).has(e.target).length === 0) {
            $('.ui-dropdown').removeClass('active');
        }
    });
  });


});
