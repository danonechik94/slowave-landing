var slowave_app = angular.module('slowave_app', []);

slowave_app.controller('InfoSectionController', ['$scope', function ($scope) {
	// $scope.title = "Creativity is important for us";
	// $scope.description = "DESCRIPTION";
	$scope.data = [
		{"title": ["Creativity", " is important for us"], "description":"Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligua eget lacinia odo nec elit."},
		{"title": ["Rapidis", " important for us"], "description":"Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligua eget lacinia odo nec elit."},
		{"title": ["Magic", " is important for us"], "description":"Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligua eget lacinia odo nec elit."},
		{"title": ["Award", " is important for us"], "description":"Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligua eget lacinia odo nec elit."},
	];

}]);

// JQuery part
$(function () {
	$current_element = $('.info-icon:first-child');
	$current_element.toggleClass('active-icon');

	// Доделать функцию анимации текста
	$('.info-element-description').click(function () {
		$('#portfolio-link').fadeIn('slow');
	});
	// $('info-icon').click(function(event) {
	// 	alert("CLICK");
	// 	$current_element.toggleClass('active-icon');
	// 	$current_element = event.currentTarget;
	// 	$current_element.toggleClass('active-icon');
	// });
	$('.info-icon').each(function(index, val) {
		 $(val).bind('click', function(event) {
		 	
		 	$current_element.toggleClass('active-icon');
			$current_element = $(val);
			$current_element.toggleClass('active-icon');
		 });
	});

});