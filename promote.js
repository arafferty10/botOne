//>>>>>>>>>>>>>>>>>>>>>
//Promote Shit Twitter Bot
//>>>>>>>>>>>>>>>>>>>>>

console.log(' ')
console.log('The bot is coming alive...');
console.log(' ')

//Must install twit library first using npm install twit --save
//This is basically'importing' it to the code
var Twit = require('twit');

//Now we are making a simple T variable to be used anytime we want to use the twit library we just do t.< >
var T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//List of Relevant Hashtags
var hashTags = [

]



setInterval(prelim, 1000*60*5) //in milliseconds so 1000*60 = 1 min // 1000*60*10 = every 10 min

//Start up function
function prelim()
{
  var rand = Math.floor(Math.random()*20);		//Randomly selecting a hashtag
  var params = {
		q: 'hashTags[rand]',
		count: 1
	}

}


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//Sudo Code Area

//What we want to do here:

//Find Relevant Hashtags (and users?)

//Promote content in those areas for people to see/RT

//(Seperate thought: Can you track individual but.lys through google analytics to see how many times that leads to projcet)


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//Posting a Tweet from here down >>>>>>>>>>>>>>>>>>>>

function tweetMessage(txt)
{
	var tweet = {
		status: txt
	}
	console.log("Response:")
	console.log(tweet)
	console.log(" ")

	//T.post is using the post from the twit library SYNTAX>>> T.Post(<type>, <variable>, <function to exec>)
	T.post('statuses/update', tweet, tweeted);
	// tweeted();

	function tweeted(err, data, response) {
		if(err){
			console.log("Something went wrong!")
		}
		else{
			console.log("Tweet Posted!")
		}
	}

}
