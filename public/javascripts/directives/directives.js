app.directive('appText', function() {
	return {
		restrict: 'E',
		scope: {
			info: '=',
			index: '@'
		},
		templateUrl: 'javascripts/directives/text.html'
	};
});

app.directive('appTextarea', function() {
	return {
		restrict: 'E',
		scope: {
			info: '=',
			index: '@'
		},
		templateUrl: 'javascripts/directives/textarea.html'
	};
});

app.directive('appMultipleChoice', function() {
	return {
		restrict: 'E',
		scope: {
			info: '=',
			index: '@'
		},
		templateUrl: 'javascripts/directives/multipleChoice.html'
	};
});

app.directive('appScale', function() {
	return {
		restrict: 'E',
		scope: {
			info: '=',
			index: '@'
		},
		templateUrl: 'javascripts/directives/scale.html'
	};
});

app.directive('appCheckbox', function() {
	return {
		restrict: 'E',
		scope: {
			info: '=',
			index: '@'
		},
		templateUrl: 'javascripts/directives/checkbox.html'
	};
});