var longerString  = function(){
  // get user input
  var string1 = document.getElementById('word1').value;
  var string2 = document.getElementById('word2').value;

  if( string1.indexOf(" ") >= 0 || string2.indexOf(" ") >= 0){
    console.log("Come on... No spaces...");
  }
  else {
    if( string1.length > string2.lenght){
    console.log(string1 + " Is shorter... Tricked you :P");
    }
    else {
      console.log(string2 + " Is longer! Opposite day :P");
    }
  }
  // check for whitespace
  if( string1.indexOf( " " ) >= 0 || string2.indexOf( " " ) >= 0 ){
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
