var longerString  = function(){
  // get user input
  var string1 = document.getElementById('word1').value;
  var string2 = document.getElementById('word2').value;
  if (string1.length === 0 || string2.length === 0){
  console.log("Please enter two words to compare.");
}
  // check for whitespace
  else if( string1.indexOf( " " ) >= 0 || string2.indexOf( " " ) >= 0 ){
    console.log("Whitspace ROCKS!!!");
  }
  else {
    if( string1.length > string2.length ){
      console.log( string1 + " is the longest string" );
    }
    else{
      console.log( string2 + " is the longest string" );
    }
  }
};
