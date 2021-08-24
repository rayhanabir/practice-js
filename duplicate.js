let items = ['chanachur', 'badam', 'biscuit', 'chocklet', 'water', 'chips', 'juice', 'badam', 'water'];

function removeDuplicate(items){
    let unique = [];
    for(let element of items){

        if(unique.indexOf(element)==-1){
            unique.push(element)

        }
       
    }
    return unique; 
}

let result = removeDuplicate(items);
console.log(result);

//again try

let studentsMarks = [22, 33, 55, 44, 88, 99, 66, 22, 44, 76, 54,90, 44];

function removeDuplicate(arr){
    let unique = [];
   for(let i = 0; i<arr.length; i++){
      let element = arr[i];
     if(unique.indexOf(element)== -1){
         unique.push(element);
     }
   }
   return unique;
}

let result = removeDuplicate(studentsMarks);
console.log(result);