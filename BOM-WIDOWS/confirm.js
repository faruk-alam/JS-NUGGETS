// The confirm() is a method of the window object.
// The confirm() shows a system dialog that consists of a question and two buttons: OK and Cancel.
// The confirm() returns true if the OK button was clicked or false if the Cancel button was selected

const answer = confirm("do you want to delete it ?")

if(answer){
    alert("You have successfully deleted.")
}else{
    alert("you have cancelled it.")
}