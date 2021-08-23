function fibonacchiSeries(num){
   if(typeof num != "number"){
       return 'please give a number'
   }
   if(num < 2){
       return 'please enter a positive number greater than 2';
   }
    let fibo = [0, 1];
    for(i = 2; i<num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

let result = fibonacchiSeries(-2);
console.log(result);

