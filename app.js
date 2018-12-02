const submit = document.getElementById('submit');
const inspect = document.getElementById('check');
const size = document.getElementById('size');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const uName = document.querySelector('#name');
const number = document.querySelector('#number');
const code = document.querySelector('#project');
const user = [uName,email,number,loc];
let valid = true;
let check = false;
let x = 0;
var url = 'https://api.airtable.com/v0/appGMs3wYCKeVkQnl/Table%201?api_key=keyZ3s4zJ9nbnOFdZ';
// test if inputs are empty
function test(val){
let empty = '';
  for(let i = 0; i < val.length ; i += 1){
    if(val[i].value === ''){
   empty += '" ' + val[i].name + '",';
   check = false;
 }
}
  if(empty !== ''){
    alert('You did not fill in the info for the ' + empty + ' input(s).' );
} else{
  check = true;
}
}

//email validation
function ValidateEmail(mail)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
  }else{
    alert("You have entered an invalid email address!");
    check = false;
  }
}
//check if input is number
function isNumber(val){
 if(!isNaN(val.value)){
alert('you need to write letters for the ' + val.name + ' input.')
check = false;
}
}

//check if data already excists in database
// function validate(data){
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//   var myArr = JSON.parse(xmlhttp.responseText);
//   for(let i = 0 ; i < myArr.records.length ; i += 1){
//   if(myArr.records[i].fields.Name === data.fields.Name){
//   check = false;
//   }
// }
// if(check === false){
//   alert('the "Name" you gave already exsists in the database!');
//   check = false;
// }
// }
//   }
//   xmlhttp.open("GET",url);
//   xmlhttp.send();
// }

//sends data to server
submit.addEventListener('click',(event)=>{
  test(user);
  if(check === true){
  ValidateEmail(email);
    isNumber(uName);
    isNumber(loc);
  }

var data = {
"fields": {
 "Name":uName.value,
 "Email address":email.value,
 "Number": number.value,
 "Time  of work requested":size.value,
 "Location of user":loc.value,
 "Type Of Work": code.value
}
};






if(check === true){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(xmlhttp.responseText);
    // working with the recived data
     for(let i = 0 ; i < myArr.records.length ; i += 1){
      if(myArr.records[i].fields.Name === data.fields.Name){
  valid = false;
  check = false;
 }
}  if(check === false){
    alert('the "Name" you gave already exsists in the database!');
  }
}
}
  xmlhttp.open("GET",url);
  xmlhttp.send()
}

  if(check === true && valid === true){
  var xhr = new XMLHttpRequest();
  xhr.open('POST',url);
 xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify(data));
}
});
