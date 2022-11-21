
document.getElementById("btn").addEventListener("click",function(){
let string = document.getElementById("input-text").value;
checkPalindrome(string); 
});
function checkPalindrome(string){
// convert string to an array
const arrayValues = string.split('');

// reverse the array values
const reverseArrayValues = arrayValues.reverse();

// convert array to string
const reverseString = reverseArrayValues.join('');

if(string == reverseString) {
    result.textContent = "It is a palindrome, you should've known idiot."
}
else {
    result.textContent = "Not a palindrome."
}
}



