//Print your name, age, Marital Status by storing them in different variables
var name = 'Sruthi',age =23, martialstatus=false;
console.log("AGE: "+age);
console.log("NAME: "+name);
console.log("MARTIAL STATUS: "+martialstatus);
console.log("\n");
console.log("********************************************************************************************");
console.log("\n");

//Define 3 variables to store your gender, height (in inches ), non-veg (food preference)
//Print all the three variable types (one per line in the given order)

var gender='female';
var height='62';
var non_veg=true;
console.log("DATATYPE OF 'gender': "+typeof(gender));
console.log("DATATYPE OF 'height': "+typeof(height));
console.log("DATATYPE OF 'non_veg': "+typeof(non_veg));
console.log("\n");
console.log("********************************************************************************************");
console.log("\n");

//Given the year of birth of a person, calculate his/her age (You can store the current year in a variable)
var current_year = 2022;
var year_of_birth = 1999;
var age=current_year - year_of_birth;
console.log("CURRENT AGE: "+age);
console.log("\n");
console.log("********************************************************************************************");
console.log("\n");

//Given the 3 subjects marks of a particular student calculate the total marks obtained
var sub_1 = 24,sub_2=20,sub_3=25;
var totalMark=sub_1+ sub_2+ sub_3;
console.log("Total Marks :" +totalMark);
console.log("\n");
console.log("********************************************************************************************");
console.log("\n");


//Given the sides of a rectangle print the perimeter and area
var length=6,breadth=4;
var area=length*breadth;
var perimeter=2*(length+breadth);
console.log("Area of rectangle: " +area);
console.log("Perimeter of rectangle: " +perimeter);
console.log("\n");
console.log("********************************************************************************************");
console.log("\n");

//Given a number of total months find the number of months remaining after converting the total months to years
var total_months=26;
var year=12;
var rem=total_months%year;
console.log("REMAINING MONTHS: "+rem);
console.log("\n");
console.log("********************************************************************************************");
console.log("\n");


//Given the Principal Amount, Interest Percentage and Time calculate the simple interest amount
var principal_amount= 20000,time=4,interest_rate=3;
var simple_interest= (principal_amount*time*interest_rate)/100;
console.log("Simple Interest = " +simple_interest);
console.log("\n");
console.log("********************************************************************************************");
console.log("\n");


//Given the marks of 6 students in a class calculate their average marks
var std_1=98, std_2=79, std_3=54, std_4=87 ,std_5=25 ,std_6=79;
var avg_marks=(std_1 + std_2 + std_3 + std_4 + std_5 + std_6)/6;
console.log("Average Marks:" +avg_marks);
console.log("\n");
console.log("********************************************************************************************");
console.log("\n");


//Given 3 product prices and their quantity calculate the total amount of items in the cart
var p1_price=12,p1_quantity=3;
var p2_price=46,p2_quantity=5;
var p3_price=135,p3_quantity=2;
var total=p1_price*p1_quantity+p2_price*p2_quantity+p3_price*p3_quantity;
console.log("Total price :" +total);
console.log("\n");
console.log("********************************************************************************************");
console.log("\n");


//Given the item prices and quantity along with tax, discount and tip calculator the total bill amount
var p1_price=12,p1_quantity=3;
var p2_price=46,p2_quantity=5;
var p3_price=135,p3_quantity=2;
var taxPercentage = 12, discountPercentage = 20, tipPercentage = 5;

var total=p1_price*p1_quantity+p2_price*p2_quantity+p3_price*p3_quantity;

var totalBillAmount = total * [(100 + taxPercentage) / 100] * [(100 - discountPercentage) / 100] * [(100 + tipPercentage) / 100];
console.log("Total Bill Amount:"+totalBillAmount);