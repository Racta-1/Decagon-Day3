let string = "abacdeca";

function getMaxChar(string){
    let counter = {};
    let len = string.length;
    for(var i=0; i < len; i += 1){
        counter[string[i]] = (counter[string[i]] || 0) + 1;
    }

    let biggest = -1, number;
    for(var key in counter){
        if(counter[key] > biggest){
            biggest = counter[key];
            number = key;
        }
    }
    return number;

}

console.log(getMaxChar(string));

// function getMaxChar(string){
//     var max = 0;
//     var maxChar = '';

//     string.split('').forEach(element => {
//         if(string.split(element).length > max){
//             max = string.split(element).length;
//             maxChar = element;
//         }
//     });
//     return maxChar;
// }