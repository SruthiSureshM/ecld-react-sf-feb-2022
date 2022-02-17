//Define a variable count Print your name using while loop the no of times the value assigned to the variable count

var count=5,i=0;
while(i<count){
    console.log("Sruthi");
    i++;
}
console.log("\n");
//Define a variable limit Print your name using for loop the no of times the value assigned to the variable limitDefine a variable limit Print your name using for loop the no of times the value assigned to the variable limit

console.log("\n");
var limit=4,i;
for(i=0;i<limit;i++){
    console.log("Sruthi");
}
console.log("\n");
//Using a while loop print the numbers in descending order from the given starting to ending limit
console.log("\n");
var start=20,end=25;
while(end>start){
    console.log(end);
    end--;
}
for(i=end;i>start;i--){
    console.log(i);
}
console.log("\n");
//Given a starting number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time.

console.log("\n");
var start_value=13;
for(i=start_value;i>0;i=i-4){
    console.log(i);

}
console.log("\n");
//Print the average of all the numbers from 1 to given limit
console.log("\n");
var limit=5,sum=0,avg=0;
for(var i=0;i<=limit;i++){
    sum=sum+i;
}
console.log("SUM IS: "+sum);
avg=sum/limit;
console.log("AVERAGE IS: "+avg);
console.log("\n");
//Find out the average of the first 100 n natural numbers using for loop.
console.log("\n");
var sum=0,avg=0,i;
for(i=0;i<=100;i++){
    sum=sum+i;
}
avg=sum/100;
console.log("Average of 100 numbers: "+avg);
console.log("\n");
//Print all the multiples of 3 till 100 using for loop
console.log("\n");
var i;
for(i=0;i<100;i++){
    if((i%3)==0){
        console.log(i);
    }
}
console.log("\n");
//Given a string print all the consonants which are not a,e,i,o,u using for loop.

console.log("\n");
var str="flowerchild";
for(i=0;i<str.length;i++){
    if((str.charAt(i)!='a') && (str.charAt(i)!='e') && (str.charAt(i)!='i') && (str.charAt(i)!='o') && (str.charAt(i)!='u')){
            console.log(str.charAt(i));
    }
}
console.log("\n");
//Given a string find out the length of that string
console.log("\n");
var str1="Kerala is God's own country";
console.log(str1.length);
console.log("\n")
//Given a string, print the first character and last character of that string.

console.log("\n");
var str2="springseason";
l=str2.length;
console.log(str2.charAt(0)+" , " +str2.charAt(l-1));
console.log("\n");
//Given a string print the odd indexes of that string using for loop

console.log("\n");
var str3="edstem";
for(i=0;i<str3.length;i++){
    if((i%2)!==0){
        console.log(str3.charAt(i));
    }

}
console.log("\n");
//Find out the sum of the first 10 natural numbers using for loop
console.log("\n");
var sum=0,i;
for(i=0;i<100;i++){
    sum=sum+i;
}
console.log(sum);
