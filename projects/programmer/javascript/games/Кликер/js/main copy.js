/* Технология AJAX */

$(function() {
	var sectionHeight = $('#section-1').height();

	$(window).scroll(function(event) {
		var top = $(this).scrollTop();
		if (top == sectionHeight) {
			$('#sections').load('./sections.html #section-9');
		}
	});

});	±