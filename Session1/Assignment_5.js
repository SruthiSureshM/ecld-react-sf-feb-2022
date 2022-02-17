
//1. Given an array of string join them with a comma ,


var array = ["HTML", "CSS", "JAVA", "JS"];
var string = "";

for (var i = 0; i < array.length; i++) {
  if (i == 0) {
    string += array[i];
  } else {
    string += ", " + array[i];
  }
}

console.log(string);


//2. Given an array or string print the total no of characters

var array_1 = ["HTML", "CSS", "JAVA", "JS", "ANDROID"];
var count = 0;

for (var i = 0; i < array_1.length; i++) {
  for (var j = 0; j < array_1[i].length; j++) {
    count++;
  }
}

console.log("Total Number of characters in the given array : " +count);





//3. Given an array of game, scores print the highest and lowest score

var array_2 = [100,20,31,150,39,72];

var highest = array_2[0];
var lowest = array_2[0];

for (var i = 1; i < array_2.length; i++) {
  if (array_2[i] > highest) {
    highest = array_2[i];
  } else if (array_2[i] < lowest) {
    lowest = array_2[i];
  }
}

console.log("Highest: "+highest);
console.log("Lowest: "+lowest);





// 4.Given a matrix, print the rows and columns


var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("No of Rows - "+matrix.length);
console.log("No of Columns - "+matrix[0].length);




//5. Given a matrix print the first diagonal


var array_4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < array_4.length; i++){
    for (var j = 0; j < array_4.length; j++){
        if (i == j) {
            console.log(array_4[i][j]);
        }
    }
}



//6. Given an array of string generate an array whose first or last character is a

var array_5 = ["assignment", "problem", "media", "upload"];

for (var i = 0; i < array_5.length; i++) {
  if (array_5[i][0] === "a" || array_5[i][array_5[i].length - 1] === "a") {
    console.log(array_5[i]);
  }
}


// 7.Given an array of strings print the snake case of the strings [Assume Small case strings]

var array_6 = ["edstem", "tech"];
var string = "";

for (var i = 0; i < array_6.length; i++) {
  if (i == 0) {
    string += array_6[i];
  } else {
    string += "_" + array_6[i];
  }
}

console.log(string);


//8.Given an 2d Array print the difference of first and second diagonals sum



var array_7 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var d_Sum1 = 0;
var d_Sum2 = 0;

for (var i = 0; i < array_7.length; i++){
    for (var j = 0; j < array_7[i].length; j++){
        if (i==j) {
            d_Sum1 += array_7[i][j];
        }
        if (i + j === array_7.length - 1) {
          d_Sum2 += array_7[i][j];
        }
    }
}

console.log("Diagonal Difference = "+(d_Sum1 - d_Sum2));



//9. Given an array of numbers print the product of all numbers

var array_8 = [2, 3, 4];
var product = 1;

for (var i = 0; i < array_8.length; i++) {
  product *= array_8[i];
}

console.log(product);



//10.Given an 2d array print the mid column


var matrix_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var str = "";

for (var i = 0; i < matrix_1.length; i++) {
  if (
    matrix_1[i][(matrix_1[i].length - 1) / 2] ==
    matrix_1[0][(matrix_1[i].length - 1) / 2]
  ) {
    str += matrix_1[0][(matrix_1[i].length - 1) / 2];
  } else {
    str += "," + matrix_1[i][(matrix_1[i].length - 1) / 2];
  }
}

console.log(str);