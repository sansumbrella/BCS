// This code can be run from within chalkboard: http://sansumbrella.github.io/BCS/chalkboard
// Define the initial madlib text.
var text = "Here is some ADJECTIVE NOUN. Another ADJECTIVE NOUN does this, too.";
// Create arrays of possible replacement words.
var adjectives = ["silly", "strange", "fearsome"];
var nouns = ["pie", "Bloomington", "chair", "speaker", "blackboard"];

// pickOne selects a random item from an array.
var pickOne = function(list) {
  var index = Math.floor(Math.random() * list.length);
  return list[index];
};

write( "Source text:" );
write( text );

// Replace all adjectives with a random choice.
while( text.indexOf("ADJECTIVE") != -1 ) {
  text = text.replace( "ADJECTIVE", pickOne(adjectives) );
}
// Replace all nouns with a random choice.
while( text.indexOf("NOUN") != -1 ) {
  text = text.replace( "NOUN", pickOne(nouns) );
}

// Output our text
write( "Madlib result: " );
write(text);
