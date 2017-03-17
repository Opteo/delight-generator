;(function(){
	window.delightful_vars = {}
	window.delight = {
		
		variables : [
			{
				variable: '$city',
				func: function(args) {
					return 2
				}
			},
			],

		generate : function (args) {
			window.delightful_vars = args
			var _this = this

			return this.getDefaultData().then(function(default_data) {
				
				console.log(default_data)

				// var city = available_data[0]
				// var valid_messages = this.messages.filter(function (message) {
					// return //return if we have a all of sentence.needs in our api results
				// })
				// _this.apiGet('http://ip-api.com/json')
				// .then(function(res) {
				// 	console.log(res)
				// })

				return 'Loïc is a very silly man'
			})
		},

		messages : [{
			text : 'Stay classy, $city',
			needs : ['city']
		},
		{
			text : 'Welcome back, $name',
			needs : ['name']
		},
		{
			text : 'The best Adwords work is less Adwords work',
			needs : []
		},
		{
			text : 'No more #badwords',
			needs : []
		},
		{
			text : 'Making Adwords great again since 2015',
			needs : []
		},
		{
			text : 'To infinity and beyond!',
			needs : []
		},
		{
			text : 'May the Quality Scores be with you. [yoda emoji]',
			needs : []
		},
		{
			text : 'What is this [emoji] Payperclip Marketing [emoji]?',
			needs : []
		},
		{
			text : 'You had me at hello world',
			needs : []
		},
		{
			text : 'Ahoy Matey! Welcome to the Adwords ship',
			needs : []
		},
		{
			text : 'Optimizing Adwords CPAs since 2015',
			needs : []
		},
		],

		getAllData : function () {
			return Promise.all([
				// getCity(),
				// getName()
			])
		},

		apiGet : function(url) {
			return new Promise(function(resolve, reject) {
				var xhttp = new XMLHttpRequest()
				xhttp.onreadystatechange = function() {
					if(this.readyState == 4 && this.status == 200) {
						resolve(JSON.parse(this.responseText))
					}
				}
				xhttp.open("GET", url, true)
				xhttp.send()
			})
		}

	}

}())
