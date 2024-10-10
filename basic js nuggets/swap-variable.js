let var1 = prompt("Enter your first variable")
let var2 = prompt("Enter your second variable")
document.write("Your real variable is : " + var1 + "," +var2 + "<br>");
// let swap;
// swap = var1;
// var1 = var2;
// var2 = swap;
// using distructuring method
[var1,var2] = [var2,var1]
document.write("Your swaping variable is : " + var1 + "," +var2);
