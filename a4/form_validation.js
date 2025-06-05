
function validateForm(){
var errorMessagesfirst="";
var errorMessageslast="";
var errorMessagesemail="";
var errorMessagesphone="";
var errorMessagesusername="";
var errorMessagespassword="";
var errorMessagesaddress="";
var errorMessagescity="";
var errorMessagesstate="";
var errorMessagescountry="";
var errorMessageszipcode="";

//1) create a variable to control status of each field. Assume that they are not valid
var validFirstname=false;
var validLastname=false;
var validEmail=false;
var validPhone=false;
var validUsername=false;
var validPassword=false;
var validAddress=false;
var validCity=false;
var validState=false;
var validCountry=false;
var validZipCode=false;
//2) create variables to read the values from html text inputs
var firstname = document.getElementById("FirstName").value;
var lastname = document.getElementById("LastName").value;
var email = document.getElementById("Email").value;
var phone = document.getElementById("Phone").value;
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
var address = document.getElementById("Address").value;
var city = document.getElementById("City").value;
var state = document.getElementById("State").value;
var country = document.getElementById("Country").value;
var zipcode = document.getElementById("ZipCode").value;

//3) do the validation
var numbers=/^[0-9]+$/;
var letters=/^[a-zA-Z]*$/;

if (firstname==="null" || firstname==="" || firstname.length > 20 || !firstname.match(letters)) {
  errorMessagesfirst += "<p>The first name is required, cannot be greater than 20 characters, and can only contain letters</p>";
} else {
  validFirstname=true;
}
  
if (lastname==="null" || lastname==="" || lastname.length > 20 || !lastname.match(letters)) {
  errorMessageslast += "<p>The last name is required, cannot be greater than 20 characters, and can only contain letters</p>";
} else {
  validLastname=true;
}
  
var atpos = email.indexOf("@");
var dotpos = email.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.length) {
    errorMessagesemail += "<p>Invalid email</p>";
} else {
    validEmail=true;
}

var containsdash = phone.indexOf("-")>=0;
if ((!containsdash && phone.length<10) || !phone.match(numbers)) {
  errorMessagesphone += "<p>Invalid phone number</p>";
} else if (phone===null||phone ==="" ||phone.length>15) {
  errorMessagesphone += "<p>Invalid phone number</p>";
} else {
  validPhone=true;
}
  
if (username==="null" || username==="" || username.length > 12) {
  errorMessagesusername += "<p>The username is required and cannot be greater than 12 characters</p>";
} else {
  validUsername=true;
}
  
if (password==="null" || password==="" || password.length > 7) {
  errorMessagespassword += "<p>The password is required and cannot be greater than 7 characters</p>";
} else {
  validPassword=true;
}
  
if (address==="null" || address==="" ) {
  errorMessagesaddress += "<p>The address is required </p>";
} else {
  validAddress=true;
}

if (city==="null" || city==="" ) {
  errorMessagescity += "<p>The city is required </p>";
} else {
  validCity=true;
}

if (state==="000" ) {
  errorMessagesstate += "<p>The state is required </p>";
} else {
  validState=true;
}
  
if (country==="000" ) {
  errorMessagescountry += "<p>The country is required </p>";
} else {
  validCountry=true;
}

if (country==="008"){
  if (zipcode===null||zipcode ==="" ||zipcode.length>5|| !zipcode.match(numbers)) {
  errorMessageszipcode += "<p>Invalid zip code number</p>";
} else {
  validZipCode=true;
  }
}  
  


//4) send error messages 
document.getElementById("errorMessagesfirst").innerHTML = errorMessagesfirst;
document.getElementById("errorMessageslast").innerHTML = errorMessageslast;
document.getElementById("errorMessagesemail").innerHTML = errorMessagesemail;
document.getElementById("errorMessagesphone").innerHTML = errorMessagesphone;
document.getElementById("errorMessagesusername").innerHTML = errorMessagesusername;
document.getElementById("errorMessagespassword").innerHTML = errorMessagespassword;
document.getElementById("errorMessagesaddress").innerHTML = errorMessagesaddress;
document.getElementById("errorMessagescity").innerHTML = errorMessagescity;
document.getElementById("errorMessagesstate").innerHTML = errorMessagesstate;
document.getElementById("errorMessagescountry").innerHTML = errorMessagescountry;
document.getElementById("errorMessageszipcode").innerHTML = errorMessageszipcode;
//5) return the status of each field
  return validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validCountry && validZipCode;
}

