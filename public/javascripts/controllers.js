app.controller('HomeController', ['$scope', function($scope) {
  console.log("load home success");
}]);

app.controller('CurUserController', ['$scope', function($scope) {
  console.log("load current user success");
}]);

app.controller('AddUserController', ['$scope', function($scope) {
  console.log("load add user success");
}]);

app.controller('ExportController', ['$scope', function($scope) {
  console.log("load export success");
}]);


app.controller('ProfileController', ['$scope', function($scope){

	$scope.Questions = [
		{
			Question: "First name",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "Last name",
			Type: "Text",
			Answer: "Jiang"
		},
		{
			Question: "Gender",
			Type: "MC",
			Options: ["Male", "Female", "Other"],
			Answer: "Male"
		},
		{
			Question: "Address",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "Email",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "Date of birth (MM/DD/YYYY)",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "Country of birth",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "Martial Status",
			Type: "MC",
			Options: ["Single", "Married", "Divorced", "Separated", "Common Law", "Widowed"],
			Answer: ""
		},
		{
			Question: "Emergency Contact Name",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "Emergency Contact Number",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "Race/Ethnic Origin",
			Type: "MC",
			Options: ["White", "Black", "Oriental", "Hispanic", "Aboriginal", "Other"],
			Answer: ""
		}
	];

	$scope.submit = function() {
		var fields = $(".question")
		$.each(fields, function(index, dom) {
			var answer;
			if ($(dom).hasClass('radio')) {
				answer = ($(dom).find('input[name='+$(dom).attr("id")+']:checked').val());
			}else{
				answer = ($(dom).val());
			}
			$scope.Questions[index].Answer = answer;
		});

		$.ajax({
			type: "POST",
			url: "/app",
			data: JSON.stringify($scope.Questions),
			success: function(data){
				console.log(data)
			},
			dataType: "json"
		});
	};

	$scope.getData = function(){

	};

	$scope.update = function() {
		var fields = $(".question")
		$.each(fields, function(index, dom) {
			var answer = $scope.Questions[index].Answer;
			if (answer.length > 0) {
				if ($(dom).hasClass('radio')) {
					$(dom).find('input[value='+answer+']').prop("checked", true);
				}else{
					$(dom).val(answer)  ;
				}
			}
			$scope.Questions[index].Answer = answer;
		});
	}

	$scope.init = function() {
		$scope.getData();
		$scope.update();
	}

}]);

app.controller('SPController', ['$scope', function($scope) {
	$scope.Questions = [
		{
			Question: "What language do you prefer?",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "What are your trigger words?",
			Helper: "i.e. anxiety inducing words",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "What are your soothing words?",
			Helper: "",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "What are your cherished past memories?",
			Helper: "e.g. childhood friends, family vocations, etc.",
			Type: "Textarea",
			Answer: ""
		},
		{
			Question: "What is your family background?",
			Helper: "",
			Type: "Textarea",
			Answer: ""
		},
		{
			Question: "Where did you grow up and how long did you live there fore?",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "What were your previous employments?",
			Type: "Textarea",
			Answer: ""
		},
		{
			Question: "How many close relaitonships do you have?",
			Helper: "E.g. friends, family, spouse",
			Type: "Text",
			Answer: "None"
		},
		{
			Question: "Do you feel more comfortable with certain race (please specify)?",
			Type: "Text",
			Answer: ""
		}
	]

	$scope.submit = function(form) {
		var editedFields = [];
		var fields = $(".question")
		$.each(fields, function(index, dom) {
			var answer;
			if ($(dom).hasClass('radio')) {
				answer = ($(dom).find('input[name='+$(dom).attr("id")+']:checked').val());
			}else{
				answer = ($(dom).val());
			}
			$scope.Questions[index].Answer = answer;
		});

		$.ajax({
			type: "POST",
			url: "/app",
			data: JSON.stringify($scope.Questions),
			success: function(data){
				console.log(data)
			},
			dataType: "json"
		});

	}

	$scope.getData = function(){

	};

	$scope.update = function() {
		var fields = $(".question")
		$.each(fields, function(index, dom) {
			var answer = $scope.Questions[index].Answer;
			if (answer.length > 0) {
				if ($(dom).hasClass('radio')) {
					$(dom).find('input[value='+answer+']').prop("checked", true);
				}else{
					$(dom).val(answer)  ;
				}
			}
			$scope.Questions[index].Answer = answer;
		});
	}

	$scope.init = function() {
		$scope.getData();
		$scope.update();
	}
}]);