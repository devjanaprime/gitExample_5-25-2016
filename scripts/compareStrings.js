var longerString  = function( string1, string2 ){
  console.log( 'in longerString: ' + string1 + " " + string2 );
  if( string1.length > string2.length ){
    console.log( string1 + " is the longest string" );
  }
  else{
    console.log( string2 + " is the longest string" );
  }
}

longerString( 'apples', 'oranges');
