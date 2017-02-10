// // Create an array that contains the letters of the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var letterStack = "";

// // // The stackLetter function should accept the array as the sole argument
function stackLetters () {
  for (var i = 0; i < alphabet.length; i++) {
  	letterStack += alphabet[i];
  	console.log(letterStack);
  }
}  

// // // Invoke the function and pass in the array
stackLetters(alphabet);


// If the current value of the counter variable can be evenly divided by 3 - 
// using the JavaScript remainder operator - then add a single space to the output.

