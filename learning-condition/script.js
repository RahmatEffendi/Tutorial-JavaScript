/**
 * Condition
 * 
 * 
 */

/**
 * Condition If
 * 
 * if(condition){
 *      #action
 * }
 */

//x = 10;
//if (x > 0) {
//console.log('Value True');
//alert("Value True");
//    document.writeln("Value True");
//}

/**
 * Condition If/Else
 * 
 * if(condition){
 *      #action
 * }else{
 *      #action
 * }
 */

//var x = prompt("Masukkan Nilai : ");
//if (x % 2 == 0) {
//    document.writeln("Number " + x + " is even");
//} else {
//    document.writeln("Number " + x + " is Odd");
//}

/**
 * Nasted Condition
 * 
 * if(condition){
 *      #action
 * }else if(condition){
 *      #action
 * }else{
 *      #action
 * }
 */

var x = prompt("Please input your money have : ");
if (x > 0 && x <= 10000) {
    document.writeln("You can lunch in Warteg");
} else if (x > 10000 && x <= 100000) {
    document.writeln("You can lunch in HokBen");
} else {
    document.writeln("You can lunch at home");
}