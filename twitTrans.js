//
// Script that responds with a language translation when tweeted at
//

console.log(' ')
console.log('The bot is coming alive...');
console.log(' ')

//Initialize Watson Commands
var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');

var languageTranslator = new LanguageTranslatorV2({
  username: '0271e0c1-c918-4812-b0fb-a05fd4fe19fd',
  password: '7Md3LXIkdrOv',
  version: 'v2'
});

//Must install twit library first using npm install twit --save
//This is basically'importing' it to the code
var Twit = require('twit');

//Now we are making a simple T variable to be used anytime we want to use the twit library we just do t.< >
//Keys are from translate bot (USE FOR REAL APPLICATION)
// var T = new Twit({
//   consumer_key:         'Lp6MIlkYFsf42LybWhg3S0UxC',
//   consumer_secret:      'pXyiNtA5U9UvGBpHgGaYKmkhedAplw97SKtOVoECUzhSn7e8Dx',
//   access_token:         '966396064948342784-uWM5he8YXOfMzLEcLfAzZKhezX1AVKA',
//   access_token_secret:  'gmfljHcY8gPgGmFeCM7z0pGYwxsKjV0gEwLKSJAcIRDMN',
//   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
// });

//Keys are from ResponseTest2 (USE FOR TESTING)
var T = new Twit({
  consumer_key:         'XAjruRZe6O6gen4zGLJL5VTbw',
  consumer_secret:      'vw3a8tb1AnMXEEUI3HXt7Xq5CpvjB0LNEtmAf5PmJCZYkQ3RPq',
  access_token:         '906982976344481794-7Nbvj6fCqkcTHNVoaepvq6iIMIJxc8G',
  access_token_secret:  'sDFWRJDAcscgFkGf0Sp1M4iPB0K5FLMwW6ck2y3ANMy9a',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//Init function
replyToDirectMessage()


// Reply to Twitter messages
function replyToDirectMessage(){

  //get the user stream
  var stream = T.stream('user');
  console.log("Stream Initialized...");
  //When tweet is recieved we activate the recieve function...
  stream.on('tweet', recieved);
}
//Collects all relevant data needed
function recieved(tweet) {
  var rand = Math.floor(Math.random()*15);		//Randomly selecting a phrase to use
  console.log(" ")
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  console.log("Tweet Recieved...");
  var msgRaw = tweet.text;
  //Taking out the bots user name so it doesn't get reposted in response
  var msg = msgRaw.replace("@aRaffaBot","");
  var sn = tweet.user.screen_name;
  //*****************Hashtags to ID languages******************
  var hash = tweet.entities.hashtags[0].text;
  console.log("Message: " + msg);
  console.log("User: @" + sn);
  console.log("Hashtags: " + hash);
  translate(msg, sn, hash) //sends message to translate function to be translated
}

//Translate function
function translate(msg, sn, hash){
  //takes the hashtag and converts from english to user input language
  var conv = 'en-'+ hash;
  //Takes the tweet that was sent to it and makes a parameter
  var parameters = {
    text: msg,
    model_id: conv
  };
//Watson function for translation
  languageTranslator.translate(
    parameters,
    function(error, response) {
      if (error)
        console.log(error)
      else
        // console.log(JSON.stringify(response, null, 2));
        var newLang = response.translations[0].translation;
        console.log("Translated to: " + newLang);
        //Calling the posting function
        tweetMessage('@' + sn + " " + newLang, sn);	//(" ") = txt
    }
  );
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
    console.log("Waiting for new tweet...");
    console.log(' ');
  }

	function tweeted(err, data, response) {
		if(err){
      console.log(' ');
			console.log("Something went wrong!");
      console.log(err);
      console.log("Waiting for new tweet...");
      console.log(" ");
		}
		else{
      console.log(' ');
			console.log("Tweet Posted!");
      console.log(" ");
		}
	}

}
