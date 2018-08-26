/**
 * Function
 * 
 * 
 */

//Function without parameter
/**function sayHello() {
    document.write("Hello, Guys");
}*/

//function with parameter
/**function sayHello(name, age) {
    document.write("Hello " + name + ". Your Age is " + age);
}*/

//function with return value
/** function concatenate(first, last) {
    var fullname;
    fullname = first + last;
    return fullname;
}

function sayHello() {
    var result;
    result = concatenate('Rahmat', ' Effendi');
    document.write("Hello " + result);
} */

//Function with constructor function
/**var func = new Function("x", "y", "return x*y");

function seconFunc() {
    var result;
    result = func(12, 93);
    document.write(result);
}*/

//function with function literal
var func = function(x, y) {
    return x * y;
}

function seconFunc() {
    var result;
    result = func(20, 30);
    document.write(result);
}