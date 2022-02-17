//1.Given an array with name, age and gender convert it to object and print keys and values by looping over it using for in loop

var array = ["Radhe", 24, "M"];
var keys = ["name", "age", "gender"]
var object = {};

for (var i = 0; i < array.length; i++){
    object[keys[i]] = array[i]
}

console.log(object)


//2.Given a string , calculate the occurrence of each and every character and print the output.
var str="edsttemmm"
var obj={}
var count=0;

for(var i=0;i<str.length;i++){
    
    if(!obj[str[i]]){
        obj[str[i]]=true
       
        count=1;
        console.log(str[i]+" : "+count)
        
    }
    else{
        count++
        console.log(str[i]+" : "+count)
       
    }
}


//3.Given user's names and their phone numbers , query the given user and find the phone number
var phoneNum={
    'ross': 7654328,
    'joey': 76543211,
    'rachel' :7262544 
}
console.log(phoneNum.joey)

//4.Given an array , find the unique elements .


var numArray=[10,20,30,10,30,40,-2]
var unObj={}
for(i=0;i<numArray.length;i++){
    if(!unObj[numArray[i]]){
        unObj[numArray[i]]=true;
        
    }
    else{
        unObj[numArray[i]]=false;
    
    }
    
}
for(i=0;i<numArray.length;i++){
    if(unObj[numArray[i]]==true){
        console.log(numArray[i]);
    }

}


//5.Given two words (small case) if they are anagrams print "TRUE" otherwise "FALSE" https://en.wikipedia.org/wiki/Anagram
var a = "hello"
var b = "heloo"
var str1 = a.split('').sort().join('');
var str2 = b.split('').sort().join('');
   if(str1 === str2){
      console.log("True");
   } else { 
      console.log("False");
   }



//Given an employees database query the employees who are from hyderabad and having experience more than 3 years
var database = [
    { name: 'vicky',
     age: 24, 
     married: false, 
     address: {
        city: 'hyderabad',
        state: 'andhra', 
        pincode: '516003' },
    skills: ['react', 'html', 'nodejs'], 
    experience: 2 },
    { name: 'nirmal', 
    age: 20,
     married: true,
      address: {
        city: 'hyderabad',
        state: 'telengana',
        pincode: '500004' },
     skills: ['css', 'figma'], 
     experience: 4 },
   { name: 'neeraj', 
     age: 26,
     married: false, 
     address: {
        city: 'bengaluru',
        state: 'karnataka',
        pincode: '510006' }, 
    skills: ['aws', 'angular', 'nodejs'], 
    experience: 5 } ]

for(var i=0;i<database.length;i++){
    if((database[i].address.city=='hyderabad')&&(database[i] .experience >3)){
    console.log("name is "+database[i].name)
    }
}
