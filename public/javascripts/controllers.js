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

var temp;

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

		// $.ajax({
		// 	type: "POST",
		// 	url: "/app",
		// 	data: JSON.stringify({"Forms": $scope.Questions}),
		// 	success: function(data){
		// 		console.log(data)
		// 	},
		// 	dataType: "json"
		// });
		localStorage.setItem("Profile", JSON.stringify({"Profile": $scope.Questions}));
	};

	$scope.getData = function(){
		$scope.Questions = JSON.parse(localStorage.getItem("Profile")).Profile;

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
			Question: "What language(s) do you prefer?",
			Helper: "E.g English, French, Mandarin, Spanish, Italian, etc",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "What are your trigger (anxiety inducing) words?",
			Helper: "E.g. no, stop, never, etc.",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "What are your soothing (relaxing) words?",
			Helper: "E.g. relax, friend, warm, etc.",
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
			Helper: "E.g. friends, family, spouse, etc.",
			Type: "Text",
			Answer: "None"
		},
		{
			Question: "Do you feel more comfortable with certain race (please specify)?",
			Helper: "E.g. Caucasian, African American, Oriental, Hispanic, Aboriginal, etc.",
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

		// $.ajax({
		// 	type: "POST",
		// 	url: "/app",
		// 	data: JSON.stringify({"Forms": $scope.Questions}),
		// 	success: function(data){
		// 		console.log(data)
		// 	},
		// 	dataType: "json"
		// });
		localStorage.setItem("Personal", JSON.stringify({"Personal": $scope.Questions}));
	}

	$scope.getData = function(){
		$scope.Questions = JSON.parse(localStorage.getItem("Personal")).Personal;

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

app.controller('SCController', ['$scope', function($scope){
	$scope.Questions = [

		{ Question: "Personal Appearance ",
		Type: "Scale",
		Options: ["Maintains a neat and tidy appearance without help or prompting from staff","Maintains neat appearance but needs some supervision","Maintains a neat appearance with close and regular supervision","Does not maintain neat appearance, even with supervision","Major problems with this item"],
		Answer: ""
		},


		{ Question: "Appropriate of Clothing",
		Type: "Scale",
		Options: ["Dresses appropriately without prompting. Wear clothing appropriate to age, sex and weather.","Dresses appropriately with occasional supervision or prompting.","Needs close supervision to ensure appropriateness of dress.","Rarely dresses appropriately, even with close supervision.","Major problems with this item."],
		Answer: ""
		},

		{ Question: "Changing Clothing",
		Type: "Scale",
		Options: ["Changes clothing regularly and independently.","Changes clothing with occasional prompting","Changes clothing with frequent prompting.","Major problems with this item."],
		Answer: ""
		},

		{ Question: "Washing Hands and Face",
		Type: "Scale",
		Options: ["Keeps hands and face clean independently.","Needs occasional prompting.","Needs frequent prompting.","Major problems with this item."],
		Answer: ""
		},

		{ Question: "Shaving",
		Type: "Scale",
		Options: ["Shaves independently","Needs occasional prompting or help.","Needs frequent prompting or help.","Major problems with this item."],
		Answer: ""
		},

		{ Question: "Menstruation ",
		Type: "Scale",
		Options: ["Manages menstruation adequately and independently.","Manages menstruation with occasional prompting and help.","Manages menstruation with frequent prompting and help.","Major problems with this item."],
		Answer: ""
		},


		{ Question: "Bathing/Hair Washing ",
		Type: "Scale",
		Options: ["Does these tasks regularly and independently.","Does these tasks with occasional prompting.","Does these tasks with frequently prompting.","Major problems with this item."],
		Answer: ""
		},

		{ Question: "Toileting ",
		Type: "Scale",
		Options: ["Uses toilet appropriately and independently.","Needs occasional help (e.g. not using toilet properly, poor cleanliness).","Frequently needs help (e.g. poor habits in the use of toilet, occasional incontinence).","Major problems with this item (e.g. frequent incontinence, severe problems with cleanliness)."],
		Answer: ""
		},

		{ Question: "Teeth Cleaning/Dentures ",
		Type: "Scale",
		Options: ["Cleans teeth independently/looks after dentures.","Needs occasional prompting.","Needs frequent prompting.","Major problems with this item (e.g. no real or false teeth, refusal to attend to teeth)."],
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
		console.log(temp=$scope.Questions)

		// $.ajax({
		// 	type: "POST",
		// 	url: "/app",
		// 	data: JSON.stringify({"Forms": $scope.Questions}),
		// 	success: function(data){
		// 		console.log(data)
		// 	},
		// 	dataType: "json"
		// });
		localStorage.setItem("selfCare", JSON.stringify({"selfCare": $scope.Questions}));

	}

	$scope.getData = function(){
		$scope.Questions = JSON.parse(localStorage.getItem("selfCare")).selfCare;

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

app.controller('MCController', ['$scope', function($scope){

	$scope.Questions = [
		{
			Question: "What stage of dementia are you at? ",
			Type: "MC",
			Options: ["Early", "Middle", "Late"],
			Answer: ""
		},
		{
			Question: "What other medical conditions do you have?",
			Type: "Checkbox",
			Options: ["Heart disease / Murmur / Angina", "High cholesterol", "High blood pressure", "Low blood pressure" , "Heartburn (reflux)", "Anemia or blood problems ", "Swollen ankles", "Shortness of breathe ", "Asthma", "Lung problems / cough", "Sinus problems", "Seasonal allergies", "Tonsillitis", "Ear problems", "Eye disorder / Glaucoma", "Seizures", "Stroke", "Headaches / Migraines", "Neurological problems", "Depression / Anxiety", "Psychiatric care", "Diabetes", "Kidney / Bladder problems", "Liver problems / Hepatitis", "Arthritis", "Cancer", "Ulcers/colitis", "Thyroid problems"],
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
			}else if ($(dom).hasClass('checkbox')){
				var list = $(dom).find('input[name="' + $(dom).attr("id") + '"]:checked');
				var temp = [];
				$.each(list, function(index, val) {
					temp.push($(val).attr('value'));
				});
				answer = temp.toString();
			}else{
				answer = ($(dom).val());
			}
			$scope.Questions[index].Answer = answer;
		});
		console.log(temp=$scope.Questions)

		// $.ajax({
		// 	type: "POST",
		// 	url: "/app",
		// 	data: JSON.stringify({"Forms": $scope.Questions}),
		// 	success: function(data){
		// 		console.log(data)
		// 	},
		// 	dataType: "json"
		// });
		localStorage.setItem("medCond", JSON.stringify({"medCond": $scope.Questions}));

	}

	$scope.getData = function(){
		$scope.Questions = JSON.parse(localStorage.getItem("medCond")).medCond;

	};

	$scope.update = function() {
		var fields = $(".question")
		$.each(fields, function(index, dom) {
			var answer = $scope.Questions[index].Answer;
			console.log(answer)
			if (typeof answer != undefined) {
				if ($(dom).hasClass('radio')){
					$(dom).find('input[value='+answer+']').prop("checked", true);
				}else if ($(dom).hasClass('checkbox')){
					var list = answer.split(",");
					$.each(list, function(index, val) {
						 $(dom).find('input[value='+val+']').prop("checked", true);
					});
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
}])