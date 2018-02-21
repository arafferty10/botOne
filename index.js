//>>>>>>>>>>>>>>>>>>>>>
//Anti-MAGA Twitter Bot
//>>>>>>>>>>>>>>>>>>>>>

console.log(' ')
console.log('The bot is coming alive...');
console.log(' ')

//Must install twit library first using npm install twit --save
//This is basically'importing' it to the code
var Twit = require('twit');

//Now we are making a simple T variable to be used anytime we want to use the twit library we just do t.< >
var T = new Twit({
  consumer_key:         'gp9SuHPQ4DXiiNhaFMIV02lTO',
  consumer_secret:      'MWcTaOS15tjaspOMwkz963ZfpHrTtSITjC8vhbK8xoKzeaABpV',
  access_token:         '906982976344481794-fYcyVEDi9s2JCVMv0fFUEMA29cLnpz8',
  access_token_secret:  'u9mmYxBWncATLfXVVKuxMuuP3gPGgoJUDnM20TMAnymIe',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var text = [
	"Yes, I understand the Second Amendment, but you can’t really take an assault weapon into McDonalds, especially when it’s a children’s party",
	"You know taking on Rosie O’Donnell isn’t the same as taking on Vladimir Putin, right",
	"Go on, admit it. When you say you wanna make America great again, what you’re really saying is a return to a world with just white people, right?",
	"Smart dress isn’t a Hawaiian shirt, Bermuda shorts, knee-high white socks and a baseball cap that reads ‘Bubba’.",
	"Only two types of people write their names across their buildings – Donald Trump and children with crayons.",
	"The world did not begin four thousand years ago. And Man didn’t walk with dinosaurs. No, Jurassic Park doesn’t count.",
	"No, he wasn’t referring to the woman’s cat.",
	"You don’t argue with a toddler if you want to win; don’t amplify the toddler’s voice, because you’ll just get trapped in the toddler’s world. Rather, just keep asking the toddler to elaborate, because logic is the downfall of every toddler.",
	"Donald Trump still hasn't released his tax returns, 12 women have accused him of sexual assault, and he's going on trial for fraud for Trump University in November, but now the only thing the media's talking about is emails. It's like if during the O.J. trial everyone was focused on whether or not the Ford Bronco had up-to-date registration.",
	"But, you know, Trump voters—really? Not even the guy who says he wants to f**k his daughter? This is not a deal-breaker for you? I mean, what does it take? A racist, a liar, a tax cheat, a draft-dodger, a deadbeat, a Russian agent, and a rapist. You know we’re a nuclear power, right?",
	"Oh, Donald Trump, the media is not 'rigged' against you. They're just recording what you say and playing it back.",
	"Climate change is not just weather",
	"a real world leader doesn't make policy on Twitter...",
	"A guy with five military draft deferments wanting a military parade to honor himself, is a bit like Cruella De Vil wanting an award from the humane society for her treatment of Dalmatians.",
	"Remember when other countries were congratulating Americans for electing Obama? How they were excited by our internal progressiveness and were looking forward to working with us?",
	"Trump's attacks on FBI are what Putin wants",
	"Trump Wants Millions For Military Parade But Nothing For Puerto Rico: Trump has been busy accusing democrats of treason for not applauding him during his State of the Union. He also wants a military parade that could cost millions. Puerto Rico is still without power for about 450,000 residents.",
	"Yup. The hair is fake.",
	"Our military is not a toy to prance around in your honor. What makes America Great is we are a beacon of freedom around the world, not a dystopian dictatorship. Rather than waste millions on useless #MilitaryParade take care of the 40,000 homeless veterans and build VA hospitals",
	"Elon Musk is an immigrant from one of the countries you called “shitholes --Donald J. Trump‏: Congratulations @ElonMusk and SpaceX on the successful FalconHeavy launch.",
	"Melania Trump follows her husband's least favorite person on Twitter: Barack Obama",

]
//Start the program by running this first command
prelim();
setInterval(prelim, 1000*60) //in milliseconds so 1000*60 = 1 min // 1000*60*10 = every 10 min

function prelim(){
	//What user we want to find
	var params = {
		q: '#MAGA',
		count: 1
	}

	//Calling the get function
	//Needed to make this prelim function just for this to send info into findUser()
	T.get('search/tweets', params, findUser)
}

function findUser(err, data, response)
{
	var rand = Math.floor(Math.random()*20);		//Randomly selecting a phrase to use
	var snName = data.statuses;						//Getting to the kinda right area...
	for(var i=0; i < snName.length; i++)
	{
		var tweetAt = snName[i].user.screen_name;				//That's the real info  we want
		//All for the console's sake...
		console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
		console.log("Username: @" + snName[i].user.screen_name);
		console.log("Tweet: " + snName[i].text);
		console.log(' ');
		//------------
		tweetMessage('.@' + tweetAt + " " + text[rand] + " #MAGA @realDonaldTrump")		//(" ") = txt
	}
	//Just in case..
	if(err){
		console.log("Error! No User Found!")
	}
	else{
		console.log("User Acquiring...")
		console.log(" ")
		console.log(" ")
	}
}

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
