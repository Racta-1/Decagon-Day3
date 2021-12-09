function checkStringPalindrome(string){
    // convert string to an array
    
    const stringArray = string.split("");

    // reverse the array values
    const reverseStringArray = stringArray.reverse();

    // convert array to string
    const reverseString = reverseStringArray.join("");

    // Check if the original string and the reversed string is the same
    if(string == reverseString){
        
        return(string + " is a palindrome");
    }

    return(string + " is not a palindrome")
}

let myString = "dog";
let myString2 = "tacocat";

console.log(checkStringPalindrome(myString))
console.log(checkStringPalindrome(myString2))