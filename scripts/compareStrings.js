var longerString  = function(){
  // get user input
  var string1 = document.getElementById('word1').value;
  var string2 = document.getElementById('word2').value;

  // check for whitespace
  if( string1.indexOf( " " ) >= 0 || string2.indexOf( " " ) >= 0 ){
    console.log("Whitespace ROCKS!!!");
  }

  else if ( string1.length === 0 || string2.length === 0 ) {
    alert ("You must fill out both input fields!");
  }

  else {
    if( string1.length > string2.length ){
      console.log( string1 + " is the longest string" );
    }
    else{
      console.log( string2 + " is the longest string" );
    }
  }



  // check for user input
  // if ( string1.length === 0 || string2.length === 0 ) {
  //   alert ("You must fill out both input fields!");
  // }
};
