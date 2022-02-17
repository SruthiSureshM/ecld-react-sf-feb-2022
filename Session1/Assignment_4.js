//1.Given an array of strings count all the vowel characters
var arr_1=['edstem', 'react', 'javascript', 'html', 'css' ];
var count=0;
for(var i=0;i<arr_1.length;i++){
    
    for(var j=0;j<arr_1[i].length;j++){
        
        if((arr_1[i][j]=='a')||(arr_1[i][j]=='e')||(arr_1[i][j]=='i')||(arr_1[i][j]=='o')||(arr_1[i][j]=='u')){
            count=count+1;
        }
    }
}
console.log("count:" +count);



//2.Given a string print "YES" if it is a palindrome "NO" if it is not one
var org_str="temple";
var rev_string=" "
var length=org_str.length;
console.log(length);

for (var i=length; i >= 0; i--) {
    rev_string += org_str[i];
  }
  
  if (org_str === rev_string) {
    console.log("YES");
  } else {
    console.log("NO");
  }




//3.Given an array of marks, find out the Average
var marks=[95, 86, 66, 94, 58];
var sum=0;
l=marks.length;
for(var i=0;i<l;i++){
    sum=sum+marks[i];
}
console.log(sum);
avg=sum/l;
console.log(avg);



//4.Given an array of strings, remove all the odd length strings from it

var array_3=['edstem', 'react', 'html', 'foodie', 'coder' ];
var array_4=[];
for(var i=0;i<array_3.length;i++){
    if(i%2 == 0){
        array_4.push(array_3[i]);
    
    }
}
console.log(array_4);

//5.Given an array of numbers, change the multiples of 3 to ‘multiple’
var array_1=[5, 9, 8, 12, 22, 18];

for(var i=0;i<array_1.length;i++){
    if((array_1[i])%3 === 0){
        array_1[i]='multiple';
    }
}
console.log(array_1);


//6.Given an empty array fill that array with first 10 natural numbers
var array_2=[];
for(var i=1;i<=10;i++){
    array_2.push(i);
}
console.log(array_2);

//7.Given a string split it into an array of words
var str_4="Edstem Technologies located at kerala";
var arr_str4=[];
var sliceWords=" "
for(var i=0;i<str_4.length;i++){
    if(str_4[i]==" "){
        arr_str4.push(sliceWords);
        }
        else{
            sliceWords+=str_4[i];
        }
}
arr_str4.push(sliceWords);
console.log(arr_str4);



//8.Given a string print all the Characters in the odd position (Start counting with 0)
var str_5="Edstem";
var arr_str5=[];
for(i=0;i<str_5.length;i++){
    if((i%2)!=0){
        arr_str5.push(str_5[i]);
    }
}
console.log(arr_str5);


//9.Given a sentence print the count of words (Separated by a space character)
var str_6="Coding is Easy";
var arr_str6=[];
var count=0;
for(i=0;i<str_6.length;i++){
    if(str_6[i]==" "){
        count++;
    }
}
console.log(count+1);


//10.Given an Array of names find out if edstem is there or not, if the given string is there print true or else print false
var arr = ['react', 'html', 'edstm'];
var search_str="edstem";
flag=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]==search_str){ 
        flag=1;
    }
    
}
if(flag==1)
    console.log("true");
else
    console.log("false");
