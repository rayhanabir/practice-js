// find max value in three two number usng function:

function findLargestNumber(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}

var number = findLargestNumber(200, 300);
console.log('largest number is:',number );

//find minimum value in two number using two numbers :

function findMinumumValue (first, second){
    if(first<second){
        return first;
    }
    else{
        return second;
    }
}
const number = findMinumumValue(400, 300);
console.log(number);


// another way

function findLargestNumber(first, second, third, fourth){
        const largeNumber = Math.max(first, second, third, fourth);
        return largeNumber;
}

const input = findLargestNumber(12, 13, 14, 15);
console.log(input);

// find min value :

function findMinimumNumber(first, second, third, fourth){
    const minimumNumber = Math.min(first, second, third, fourth);
    return minimumNumber;
}

const input = findMinimumNumber(12, 13, 14, 15);
console.log(input);

//array theke maximum number ber kora:

const arr = [2, 3, 5, 9, 100];
const result = Math.max.apply(null, arr)
console.log(result);


function maxNumber (array){
    let max = arr[0];
    for(var i =0; i<arr.length; i++){
        let element = arr[i];
        if(element < max){
            max = element;
            

        }
    }
    return max;
}

var arr = [12, 13, 44, 66, 88, 55, 4, 99];
const result = maxNumber(arr);
console.log(result);




