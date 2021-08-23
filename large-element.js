
function getLargeNumber (numbers){
    let largest = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        const current = numbers[i];
        
        if(current > largest){
            largest = current;
        }
    }
    return largest;
}

const ages = [12, 33, 45, 67, 98];
const output = getLargeNumber(ages);
console.log(output);
