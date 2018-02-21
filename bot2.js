console.log('The bot is coming alive');

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'NZv6iODJkVF5fPC0JOqiCXd08',
  consumer_secret:      'jPElwtdDbxsZqGLDI4ajdnzbT7WACDHFT7a0QaEYXx5jUrmWkf',
  access_token:         '906982976344481794-gCYmDUbUWThDd42DCqQk2cBj2W00fFk',
  access_token_secret:  'zXFursPEWU7C4pU1Y60vmNU4tnyOQd3YcZgxRd1X2Pc6j',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var params = {
	q: 'NASA',
	count: 2
};

T.get('search/tweets', params, gotData)

function gotData(err, data, response){
	var tweets = data.statuses;
	for(var i=0; i < tweets.length; i++){
		console.log(tweets[i].text);
	// console.log(data)
	}
}