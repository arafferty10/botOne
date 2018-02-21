console.log(' ')
console.log('Translate bot activating...');
console.log(' ')

var LanguageTranslatorV2 = require('watson-developer-cloud/language-translator/v2');

var languageTranslator = new LanguageTranslatorV2({
  username: '0271e0c1-c918-4812-b0fb-a05fd4fe19fd',
  password: '7Md3LXIkdrOv',
  version: 'v2'
});


//
// //Section is for Identifying the language being used
// var parameters = {
//   text: 'Hello I am Aidan'
// }
//
// languageTranslator.identify(parameters,
// function(error, response) {
//     if (error)
//       console.log(error)
//     else
//       console.log(JSON.stringify(response, null, 2));
//   }
// );
//

//Get identifiable languages
languageTranslator.getIdentifiableLanguages(
  {},
  function(err, response) {
    if (err)
      console.log(err)
    else
      console.log(JSON.stringify(response, null, 2));
  }
);
//
// var parameters = {
//   text: 'Hello',
//   model_id: 'en-es'
// };
//
// //Translate function
// languageTranslator.translate(
//   parameters,
//   function(error, response) {
//     if (error)
//       console.log(error)
//     else
//       // console.log(response.translations[0].translation);
//       console.log(JSON.stringify(response, null, 2));
//       //This is used in twitTrans I tested it here however
//       var newLang = response.translations[0].translation;
//       console.log(newLang);
//   }
// );
