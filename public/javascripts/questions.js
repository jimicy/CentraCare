Profile =
[
	{
		Question: "First name",
		Type: "Text",
		Answer: ""
	},
	{
		Question: "Last name",
		Type: "Text",
		Answer: ""
	},
	{
		Question: "Sex",
		Type: "MC",
		Options: ["Male", "Female", "Other"],
		Answer: ""
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
]

Medical =
[
	{
		Question: "Stage of Dementia",
		Type:"Multiple Choice",
		Options: ["early", "middle", "late"]
	}

	Question: "What Medications are you currently taking?",
	Helper: "Include information such as what the medication is for, how many times it is taken per day and per week, etc.",
	Answer: "" 
]

SocialPersonal =
	[
		{
			Question: "What language do you prefer?",
			Type: "Text",
			Answer: ""
		},
		{
			Question: "What are your trigger words?",
			Helper: "i.e. anxiety inducing words",
			Type: "Text",
			Options: ["Single", "Married", "Divorced", "Separated", "Common Law", "Widowed"],
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
			Answer: ""
		},
		{
			Question: "Do you feel more comfortable with certain race (please specify)?",
			Type: "Text",
			Answer: ""
		}
	

selfCare = [
	{
		Question: "Personal Appearance"
		Type: "Scale"
		Options: ["Maintains a neat and tidy appearance without help or prompting from staff
", "Maintains neat appearance but needs some supervision", "Maintains a neat appearance with close and regular supervision
", "Does not maintain neat appearance, even with supervision. Major problems
with this item"],
		Answer: ""
	}
]

newvar = [
	{
		Question: "",
		Type: "MC",
		Options: []
		Answer:""
	},
	

	selfCare = [

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
Options: ["""Changes clothing regularly and independently.","Changes clothing with occasional prompting","Changes clothing with frequent prompting.","Major problems with this item."],
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