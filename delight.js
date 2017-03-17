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

}())
