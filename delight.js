;(function() {
    window.delightful_vars = {}
    window.delight = {

        variables: [{
                variable: '$city',
                func: function(args) {
                	return new Promise(function(resolve, reject) {
                		var xhttp = new XMLHttpRequest()
                        xhttp.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                resolve(JSON.parse(this.responseText).city)
                            }
                        }
                        xhttp.open("GET", 'http://ip-api.com/json', true)
                        xhttp.send()
                    })
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
                                resolve(JSON.parse(this.responseText).value.joke)
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

				var rand_message = _this.messages[Math.floor(Math.random() * _this.messages.length)]

				if(rand_message.needs.length > 0) {
					return _this.variables.find(row => row.variable === '$' + rand_message.needs[0]).func()
					.then(function(rendered_var) {
						console.log(rendered_var)
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
}())
