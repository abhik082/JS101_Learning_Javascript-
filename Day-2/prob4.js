// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let username="abc123gmail.com";
let password="abc123";

let username1="abc123gmail.com";
let password1="abc123";
if(username==username1){
  if(password==password1){
    console.log("Login Successfully");
  } else{
    console.log("Wrong Password");
  }
} else{
  console.log("Wrong Username");
}