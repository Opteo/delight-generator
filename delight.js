;(function(){
	window.delightful_vars = {}
	window.delight = {
		
		variables : [
			{
				variable: '$city',
				func: function (args) {
					
				}
			},
			{
				variable : '$joke',
				func: function (args) {
					this.apiGet('http://api.icndb.com/jokes/random')

				.then(function(res) {
					return(res.value.joke)
				})

				}
			}

			],

		generate : function (args) {
			window.delightful_vars = args
			var _this = this

			return _this.getDefaultData().then(function(default_data) {
				
				// console.log(default_data)

				return _this.variables[1].func()

				// var city = available_data[0]
				// var valid_messages = this.messages.filter(function (message) {
					// return //return if we have a all of sentence.needs in our api results
				// })
				// _this.apiGet('http://ip-api.com/json')
				// _this.apiGet('http://api.icndb.com/jokes/random')

				// .then(function(res) {
				// 	return(res)
				// })

				// return 'Loïc is a very silly man'
			})
		},

		messages : [{
			text : 'Stay classy, $city',
			needs : ['city'],
		},
		{
			text : 'Welcome back, $name',
			needs : ['name']
		},
		{
			text : "$joke",
			needs : ["joke"],
		}
		],

		getDefaultData : function () {
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
		},

		

	}

}())
