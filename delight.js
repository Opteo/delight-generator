;(function(){
	window.delightful_vars = {}
	window.delight = {
		variables : {},
		generate : function (args) {
			window.delightful_vars = args

			return this.getAllData().then(function (available_data) {
				var city = available_data[0]



				var valid_messages = this.messages.filter(function (message) {
					return //return if we have a all of sentence.needs in our api results
				})



				// pick a random message

				// fill in the data using template thingy

				// return final message

				

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
		}],

		getAllData : function () {
			return Promise.all([
				getCity(),
				getName()
			])
		}
	}

}())