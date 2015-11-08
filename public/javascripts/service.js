app.service('mail',function(){
  	this.send = function(mail, message) {
		localStorage.setItem("sendTo", mail);
		// $.ajax({
		// 	type: "POST",
		// 	url: "/mail",
		// 	data: JSON.stringify({"sendTo": mail,
		// 						  "body": message }),
		// 	success: function(data){
		// 		console.log(data)
		// 	},
		// 	dataType: "json"
		// });
return mail;
	};
});
