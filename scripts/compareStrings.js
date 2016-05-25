var longerString  = function(){
  var string1 = document.getElementById('word1').value;
  var string2 = document.getElementById('word2').value;
  console.log( 'in longerString: ' + string1 + " " + string2 );
  if( string1.length > string2.length ){
    console.log( string1 + " is the longest string" );
  }
  else{
    console.log( string2 + " is the longest string" );
  }
}
