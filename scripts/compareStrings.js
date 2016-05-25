var longerString  = function(){
  // get user input
  var string1 = document.getElementById('word1').value;
  var string2 = document.getElementById('word2').value;

  // check for whitespace
  if( string1 == "" || string2 == "" ){
    document.getElementById("warning").innerHTML = "You must enter a string.";
    document.getElementById("warning").style.background = "red";
  } else if (string1.indexOf( " " ) >= 0 || string2.indexOf( " " ) >= 0 ) {
    document.getElementById("warning").innerHTML = "You cannot use spaces.";
    document.getElementById("warning").style.background = "red";
  } else {
    document.getElementById("warning").style.background = "green";
    if( string1.length > string2.length ){
      document.getElementById("warning").innerHTML = string1 + " is the longest string!";
    }
    else{
      document.getElementById("warning").innerHTML = string2 + " is the longest string!";
    }
  }
}
