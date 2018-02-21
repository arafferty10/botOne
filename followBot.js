console.log('The bot is coming alive');

//Must install node_modules twit library first using npm install twit --save   
//This is basically'importing' it to the code
var Twit = require('twit');

//Now we are making a simple T variable to be used anytime we want to use the twit library we just do t.< >
var T = new Twit({
  consumer_key:         'NZv6iODJkVF5fPC0JOqiCXd08',
  consumer_secret:      'jPElwtdDbxsZqGLDI4ajdnzbT7WACDHFT7a0QaEYXx5jUrmWkf',
  access_token:         '906982976344481794-gCYmDUbUWThDd42DCqQk2cBj2W00fFk',
  access_token_secret:  'zXFursPEWU7C4pU1Y60vmNU4tnyOQd3YcZgxRd1X2Pc6j',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//Setting up a user stream
var stream = T.stream('user');

//Anytime someone follows me
stream.on('follow', followed);


// var gram = 'Test 1...2...3...'
// tweetMessage(gram);


function followed(eventMsg){
	//JSON meta data path to get name and screenname 
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetMessage('@' + screenName + 'thanks for the follow!');
}


// //Posting a Tweet from here down >>>>>>>>>>>>>>>>>>>>
// tweetMessage();
// setInterval(tweetMessage, 1000*60) //in milliseconds so 1000*60 = 1 min // 1000*60*10 = every 10 min

function tweetMessage(txt)
{
	var r = Math.floor(Math.random()*100)
	var tweet = {
		status:txt
	}
	console.log(tweet)

	//T.post is using the post from the twit library SYNTAX>>> T.Post(<type>, <variable>, <function to exec>)
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
		if(err){
			console.log("Something went wrong!")
		}
		else{
			console.log("It Worked!")
		}
	}

}