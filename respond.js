//
// Script that responds when tweeted at
//

console.log(' ')
console.log('The bot is coming alive...');
console.log(' ')

//Must install twit library first using npm install twit --save
//This is basically'importing' it to the code
var Twit = require('twit');

//Now we are making a simple T variable to be used anytime we want to use the twit library we just do t.< >
//Keys are from ResponseTest2
var T = new Twit({
  consumer_key:         'XAjruRZe6O6gen4zGLJL5VTbw',
  consumer_secret:      'vw3a8tb1AnMXEEUI3HXt7Xq5CpvjB0LNEtmAf5PmJCZYkQ3RPq',
  access_token:         '906982976344481794-7Nbvj6fCqkcTHNVoaepvq6iIMIJxc8G',
  access_token_secret:  'sDFWRJDAcscgFkGf0Sp1M4iPB0K5FLMwW6ck2y3ANMy9a',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var text = [
  "thanks for helping! #cool",
  "thanks for testing! #sweet",
  "you rock! #awesome",
  "TweetBot will take over the world! #word",
  "check back for more development #cool",
  "beep boop bop... #tweet",
  "responsive twitter bot online! #bot",
  "first twitter, next... the WORLD! #bot",
  "thanks for your help! #bot",
  "you're awesome! #bot",
  "random 1 #bot",
  "random 2 #bot",
  "random 3 #bot",
  "I need more phrases #bot",
  "This is tough... #bot"
]

// prelim();
replyToDirectMessage()
// setInterval(prelim, 1000*60) //in milliseconds so 1000*60 = 1 min // 1000*60*10 = every 10 min

// function prelim(){
//   replyToDirectMessage()
// }

// Reply to Twitter messages
function replyToDirectMessage(){

  //get the user stream
  var stream = T.stream('user');
  console.log("Stream Initialized...");

  stream.on('tweet', recieved);
}

function recieved(tweet) {
  var rand = Math.floor(Math.random()*15);		//Randomly selecting a phrase to use
  console.log(" ")
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  console.log("Tweet Recieved...");
  var msg = tweet.text;
  var sn = tweet.user.screen_name;
  var hash = tweet.entities.hashtags[0].text;
  console.log("Message: " + msg);
  console.log("User: @" + sn);
  console.log("Hashtags: " + hash);

  tweetMessage('@' + sn + " " + text[rand], sn);	//(" ") = txt
  }


function tweetMessage(txt, sn)
{
	var tweet = {
    status: txt
  }

	console.log("Response: " + txt);
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  console.log(" ");

  // avoid replying to yourself when the recipient is you
  if(sn !== 'aRaffaBot'){
	//T.post is using the post from the twit library SYNTAX>>> T.Post(<type>, <variable>, <function to exec>)
	T.post('statuses/update', tweet, tweeted);
	// tweeted();
  }
  else {
    console.log(' ');
    console.log("Self-Reply not posted...");
    console.log(' ');
  }
	function tweeted(err, data, response) {
		if(err){
      console.log(' ');
			console.log("Something went wrong!");
      console.log(err);
      console.log(" ");
		}
		else{
      console.log(' ');
			console.log("Tweet Posted!");
      console.log(" ");
		}
	}

}
