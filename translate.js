console.log(' ')
console.log('The bot is coming alive...');
console.log(' ')

var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');

var languageTranslator = new LanguageTranslatorV2({
  username: '0271e0c1-c918-4812-b0fb-a05fd4fe19fd',
  password: '7Md3LXIkdrOv',
  version: 'v2'
});

var parameters = {
  text: 'Hello I am Aidan'
}

languageTranslator.identify(parameters,
function(error, response) {
    if (error)
      console.log(error)
    else
      console.log(JSON.stringify(response, null, 2));
  }
);
