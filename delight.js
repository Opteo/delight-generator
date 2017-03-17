<<<<<<< HEAD
;
(function() {
    window.delightful_vars = {}
    window.delight = {

        variables: [{
                variable: '$city',
                func: function(args) {

                }
            }, {
                variable: '$joke',
                func: function(args) {
                    // this.apiGet('http://api.icndb.com/jokes/random')

                    // .then(function(res) {
                    //     return (res.value.joke)
                    // })
                    return new Promise(function(resolve, reject) {
                        var xhttp = new XMLHttpRequest()
                        xhttp.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                resolve(JSON.parse(this.responseText))
                            }
                        }
                        xhttp.open("GET", 'http://api.icndb.com/jokes/random', true)
                        xhttp.send()
                    })

                }
            }

        ],

        generate: function(args) {
            window.delightful_vars = args
            var _this = this

            return _this.getDefaultData().then(function(default_data) {

                // console.log(default_data)
                console.log(_this.variables[1].func())
                return Promise.resolve(_this.variables[1].func()).then(function (res) {
                	console.log(res)
                	return res.value.joke
                })

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

        messages: [{
            text: 'Stay classy, $city',
            needs: ['city']
        }, {
            text: 'Welcome back, $name',
            needs: ['name']
        }, {
            text: "$joke",
            needs: ["joke"],
        }, {
            text: 'The best Adwords work is less Adwords work',
            needs: []
        }, {
            text: 'No more #badwords',
            needs: []
        }, {
            text: 'Making Adwords great again since 2015',
            needs: []
        }, {
            text: 'Making Adwords great again since 2015',
            needs: []
        }, ],

        getDefaultData: function() {
            return Promise.all([
                // getCity(),
                // getName()
            ])
        },

        apiGet: function(url) {
            return new Promise(function(resolve, reject) {
                var xhttp = new XMLHttpRequest()
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        resolve(JSON.parse(this.responseText))
                    }
                }
                xhttp.open("GET", url, true)
                xhttp.send()
            })
        },



    }
=======
;(function(){
	window.delightful_vars = {}
	window.delight = {
		
		variables : [
			{
				variable: '$city',
				func: function(args) {
					return new Promise(function(resolve, reject) {
						return resolve('London')
					})
				}
			},
			],

		generate : function (args) {
			window.delightful_vars = args
			var _this = this

			return this.getDefaultData().then(function(default_data) {
				
				var rand_message = _this.messages[Math.floor(Math.random() * _this.messages.length)]

				if(rand_message.needs.length > 0) {
					return _this.variables.find(row => row.variable === '$' + rand_message.needs[0]).func()
					.then(function(rendered_var) {
						rand_message.text = rand_message.text.replace('$' + rand_message.needs[0], rendered_var)
						return rand_message.text 
					})
				}
				return rand_message.text

			})
		},

		messages : [{
			text : 'Stay classy, $city',
			needs : ['city']
		},
		{
			text : 'Welcome back, $name',
			needs : []
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
			text : 'Making Adwords great again since 2015',
			needs : []
		},
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
		}

	}
>>>>>>> 9290eb27f3ceb1b7b954c282030f13b38fbfd8e7

}())
