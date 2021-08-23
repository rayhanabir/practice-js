function GetGrade(marks){
   
if(marks>= 80){
    return 'you got A+';
}
else if(marks>=70 && marks<80){
    return 'you got A';
}
else if(marks>=60 && marks<70){
    return 'you got B'
}
else if(marks>=50 && marks<60){
    return 'you got C';
}
else if(marks>= 33 && marks<50){
    return 'you are Pased'
}
else{
    return 'you are fail this exam';
}
}

let marks = GetGrade(60);
console.log(marks);