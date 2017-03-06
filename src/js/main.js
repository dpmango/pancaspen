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

  // UI
  $('.ui-dropdown__visible').on('click', function(){
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
