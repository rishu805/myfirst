function myFunction() {
var empty=false;
var x= document.getElementById("Uname").value; 
var y=document.getElementById("Psswd").value;
if (x == null || x == "")
{
empty=true;
alert ("Username is mandatory!")
}
if (y == null || y == "")
{
empty=true;
alert("password is mandatory!")
}

if (empty == false)
{
var a = 0;
var b = 1;
document.getElementById('outputusnm').textContent = x;
document.getElementById('col1').textContent = x;
document.getElementById('col2').textContent = y;
document.getElementById('col11').textContent = x;
document.getElementById('col12').textContent = y;
/*document.getElementsByTagName('tr')[].textcontent=x;
document.getElementsByTagName('tr')[b].textcontent=y;*/
a++;
b++;
}
console.log("password is ");
alert("Fields with * are mandatory! "+x);
}

/*function validateForm() {
  var f = document.forms["myForm"]["Uname"].value;
  if (f == "" || f == null) {
    alert("Name must be filled out");
    return false;
  }
}*/