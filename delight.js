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
                variable: '$country',
                func: function(args) {
                	return new Promise(function(resolve, reject) {
                		var xhttp = new XMLHttpRequest()
                        xhttp.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                resolve(JSON.parse(this.responseText).country)
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

            return new Promise(function(resolve, reject) {
                return _this.getDefaultData().then(function(default_data) {

                    var rand_message = _this.messages[Math.floor(Math.random() * _this.messages.length)]

                    if(rand_message.needs.length > 0) {
                        return _this.variables.find(row => row.variable === '$' + rand_message.needs[0]).func()
                        .then(function(rendered_var) {
                            rand_message.text = rand_message.text.replace('$' + rand_message.needs[0], rendered_var)
                            resolve(rand_message.text)
                        })
                    }
                    resolve(rand_message.text)
                })
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
			text : '$joke',
			needs : ['joke']
		},
		{
			text : 'The best Adwords work is less Adwords work',
			needs : []
		},
		{
			text : 'No more #badwords :no_good_tone3:',
			needs : []
		},
		{
			text : 'Making Adwords great again since 2015 :statue_of_liberty:',
			needs : []
		},
		{
			text : 'To infinity and beyond! :rocket:',
			needs : []
		},
		{
			text : 'May the Quality Scores be with you :alien:',
			needs : []
		},
		{
			text : 'What is this :paperclip: Payperclip Marketing :paperclip:?',
			needs : []
		},
		{
			text : 'You had me at hello world :wave::earth_americas: ',
			needs : []
		},
		{
			text : 'Ahoy Matey! Welcome to Adwords Island :island:',
			needs : []
		},
		{
			text : 'Optimizing Adwords CPAs :robot: since 2015',
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
