function getLowNumber(numbers){
    let lowestAge = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        const current = numbers[i];
       if(current<lowestAge){
           lowestAge = current;
           
       }
       
    }
    return lowestAge;
   
}

const friendsAge = [10, 8, 6, 22, 45, 77];
const result = getLowNumber(friendsAge);
console.log(result);