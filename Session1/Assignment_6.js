//1.Write a function named addNumbers which takes two numbers as input and return their sum
function addNumbers(num1,num2){
    var sum=num1+num2;
    console.log (sum);
}

addNumbers(8,6);


//2.Write a function to find the absolute difference of two numbers
function absolute_diff(num3,num4){
    var diff=0;
    if((num3-num4)<0){
        diff=num4-num3;
        return diff;
    }
    else{
        diff=num3-num4;
        return diff;
    }
}

console.log("Absolute differnce : "+absolute_diff(4,18));
console.log("Absolute differnce : "+absolute_diff(12,4));



//3.Write a function isOdd which returns a boolean value based the number is odd or not
function isOdd(num5){
    if((num5 % 2)==0){
        return true;
    }
    else
        return false;
}


console.log(isOdd(789));
console.log(isOdd(167542));



//4.Write a function function which prints the odd numbers from 0 to a given limit(included)
function printOddNum(limit){
    for(var i=0; i<=limit; i++){
        if((i%2)!=0){
             console.log(i);
        }
    }
}

console.log("Odd numbers: ");
printOddNum(7);


//5.Write a function to calculate the average of an array. If there are no items in the array it should return 0
var sum=0,avg=0;
function arrayAvg(arr){
   
    if(arr.length>0){
        for(var i=0; i<=arr.length-1; i++){
            sum=sum+arr[i];
            avg=sum/(arr.length);          
    }
    return avg;
}
    else
        return 0;
}
    var arr1=[ ];
    var arr2=[7,8,9,10];

    console.log("Average: "+arrayAvg(arr1));
    console.log("Average: "+arrayAvg(arr2)); 


//6.Write a function to convert a character to lower case
var char = 'H';

console.log(char.toLowerCase());