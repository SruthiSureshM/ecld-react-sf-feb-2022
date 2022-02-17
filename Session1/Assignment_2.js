//If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print "NOT LEAP YEAR"
var year=2024;
if(year%4==0){
    console.log("It is a leap year");
}
else{
    console.log("It is not a leap year");
}

// In India, a person can vote if he crosses 18years of age. Give a person year of birth print "YES" if he can vote otherwise print "NO"

var b_year=1999,c_year=2022;
var age=c_year-b_year;
if(age>18){
    console.log("YES");
}
else{
    console.log("NO");
}


//Based on the state print the region it belongs to "EAST", "WEST", "NORTH", "SOUTH"

var state='kerala';
if (
    state === "Kerala" ||
    state === "Tamil Nadu" ||
    state === "Karnataka" ||
    state === "Andhra Pradesh" ||
    state === "Telangana"
  ) {
    console.log(+state+'belongs to SOUTH');
  } else if (
    state === "Bihar" ||
    state === "Jharkhand" ||
    state === "West Bengal" ||
    state === "Sikkim" ||
    state === "Assam" ||
    state === "Arunachal Pradesh" ||
    state === "Meghalaya" ||
    state === "Nagaland" ||
    state === "Manipur" ||
    state === "Tripura" ||
    state === "Mizoram"
  ) {
    console.log(+state+" belongs to WEST");
  } else if (
    state === "Jammu Kashmir" ||
    state === "Himachal Pradesh" ||
    state === "Punjab" ||
    state === "Hariyana" ||
    state === "Uttarakhand" ||
    state === "Uttar Pradesh" ||
    state === "Madhya Pradesh" ||
    state === "Chattisgarh"
  ) {
    console.log(+state+ "belongs to NORTH");
  } else if (
    state === "Rajasthan" ||
    state === "Gujarat" ||
    state === "Maharashtra" ||
    state === "Goa"
  ) {
    console.log(+state+ "belongs to EAST");
  } else {
    console.log("Invalid");
  }
//Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"

var char='O';
switch(char){
    case 'A':
    case 'a':
    case 'E':
    case 'e':
    case 'I':
    case 'i':
    case 'O':
    case 'o':
    case 'U':
    case 'u':
        console.log("V");
        break;
    default:
        console.log("C");
        break;    
}


//Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)


var pinCode=679577;
var p_string=pinCode.toString();
console.log(p_string);
if(p_string.length==6){
    console.log("VALID");
}
else{
    console.log("INVALID");
}


//Given a number print if it is either "EVEN" or "ODD" (Use ternary Operators)


var num=23456;
num%2 ==0 ? console.log("EVEN") : console.log("ODD");

/*Given two numbers a, b Print the below statements based on the condition
"A > B"
"A < B"
"A = B" Note: Use Ternary Operators*/ 

 var num1=24543, num2=26321;
 num1>num2==0 ? console.log("A>B"): num2>num1 ? console.log("A<B"):console.log("A=B");
 
//Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)

 var size='S';
 if(size=='S')
    console.log("Small");
else if (size=='M')
    console.log("Medium");
else if (size=='L')
    console.log("Large");
else if (size=='XL')
    console.log("Extra Large");
else
    console.log("None");































