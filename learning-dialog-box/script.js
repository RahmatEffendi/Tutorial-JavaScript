/**
 * Dialaog Box
 * 
 */

//alert message
/** function warning() {
    alert("Your browser need updated");
    document.write("Your browser need updated");
}
*/

//confirmation dialog box
/** function check() {
    var chck = confirm("Do you want to continue?");
    if (chck == true) {
        document.write("Please Tell Your Name");
        return true;
    } else {
        document.write("Ohhh..Thanks!!");
        return false;
    }
}
*/

//Prompt Dialog
function helloName() {
    var name = prompt("Input Your Name : ");
    document.write("Hai " + name);
}