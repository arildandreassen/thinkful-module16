Instructions
You are tasked with building functions for an application that will either encode or decode a string using a variety of ciphers. For each cipher, you should make a series of tests using Mocha and Chai to confirm that your cipher works.

All of the functions can be found inside of the src/ directory. Each function and cipher is described below.

Below is a checklist of what you need to accomplish.

[ ] Complete the caesar() function.
[ ] Write tests for the caesar() function.
[ ] Complete the polybius() function.
[ ] Write tests for the polybius() function.
[ ] Complete the substitution() function.
[ ] Write tests for the substitution() function.

![image](/img/b6a94b251bbbe6dae7e3e84ed8be33a4-image.png)

The Caesar shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by 3, the letter A would become D.

"thinkful" -> "wklqnixo"
When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

caesar()
The caesar() function in the src/caesar.js file has three parameters:

input refers to the inputted text to be encoded or decoded.
shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
encode refers to whether you should encode or decode the message. By default it is set to true.
When building the function, keep the following constraints and rules in mind:

If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
Spaces should be maintained throughout, as should other nonalphabetic symbols.
Capital letters can be ignored.
If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).
Examples
