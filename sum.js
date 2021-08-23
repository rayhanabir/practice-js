function getSum(numbers){
    let sum = 0;
    for(let i = 0; i <numbers.length;i++){
        let element = numbers[i];
        sum += numbers[i];
    }
    return sum;
}


var result = getSum([10,20, 30, 40]);
console.log(result);
