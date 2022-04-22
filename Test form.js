
function checkCreds(){
var firstName = document.getElementById("fName").value;
var lastName = document.getElementById("lName").value;
var badgeNum = document.getElementById("bNum").value;
var fullName = firstName + " " + lastName;

if (fullName.length <10 || firstName.length<3 || lastName.length<5
    ||firstName.length>10 || lastName.length >10) {
    //This is our function to check login creds
    document.getElementById("fName").innerHTML = "Name is not valid";
    document.getElementById("lName").innerHTML - "Name is not valid"
    window.alert("Please enter your name.");
     //If name length is not valid, it will prompt name not valid
 }
else if (badgeNum >999 || badgeNum <100 ||badgeNum.length <3) {
 document.getElementById("bNum").innerHTML = "Badge Number is not valid";
 window.alert("Please enter a valid badge number");
}
//If badge number exceeds 3 numbers, it prompts badge not valid
else {
 alert ("Access Granted, Hello " + fullName + "!");
 location.replace ("https://www.uat.edu")
}
//If prompt conditions are met, You are granted access!
}

