;(function(){
	window.delightful_vars = {}
	window.delight = {
		
		variables : [
			{
				variable: '$city',
				func: function(args) {
					return 2
				}
			}
			],

		generate : function (args) {
			window.delightful_vars = args
			var _this = this

			return this.getDefaultData().then(function(default_data) {
				
				var rand_message = Math.random(0, _this.messages.length)

				console.log(rand_message)

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
			needs : ['city'],
		},
		{
			text : 'Welcome back, $name',
			needs : ['name']
		}],

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
		}

	}

}())
