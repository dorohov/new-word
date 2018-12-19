'use strict';

$(function(){

	toggleMenu()
	$('.__dropdown_trig').on('click', function() {
		var paClass = $(this).parent('.__dropdown_container').toggleClass('is--dropC__active')
			toggleMenu()
	})

	function toggleMenu() {
		$('.__dropdown_container:not(".is--dropC__active")').children('.__dropdown_box').slideUp()
		$('.is--dropC__active').children('.__dropdown_box').slideDown()
		return false
	}

});