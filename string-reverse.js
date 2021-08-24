let welcome = 'hello, how are you';
function reverseString(text){
    let reverse = '';
    for(let letter of text){
        reverse = letter + reverse;
    }
    return reverse
}

let inputText = reverseString(welcome);
console.log(inputText);
