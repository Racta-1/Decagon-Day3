function checkStringPalindrome(string){
    // check the length of the string
    
    const stringLength = string.length;

    // loop through half of the string with for loop

    for (let i=0; i < stringLength/2; i++){
        
        // Check if the first and last string is the same
        if(string[i] !== string[stringLength-1-i]){
            return(string + " is not a palindrome");
        }
    }

    return(string + " is a palindrome")
}

let myString = "dog";
let myString2 = "tacocat";

console.log(checkStringPalindrome(myString))
console.log(checkStringPalindrome(myString2))