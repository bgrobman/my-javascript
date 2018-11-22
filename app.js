const submit = document.getElementById('submit');
const inspect = document.getElementById('check');
const size = document.getElementById('size');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const uName = document.querySelector('#name');
const number = document.querySelector('#number');
const code = document.querySelector('#project');
const user = [uName,email,number,loc];

let check = false;
let valid = false;
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
function validate(data){
  let xhr1 = new XMLHttpRequest();
  xhr1.open('GET',url);
  xhr1.onreadystatechange = function(){
    if(xhr1.readyState === 4 ){
     if( xhr1.status === 200 ){
     var response = JSON.parse(xhr1.responseText);
     for(let i  = 0; i < response.length ;i+= 1){
       if(response[i] === data ){
       alert('the data you gave already exists in the database.');
       check = false;
     }else{check = true}
   }
     }else{
       alert(xhr1.statusText);
       check = false
     }

      }
    }
  xhr1.send();
}


//sends data to server
submit.addEventListener('click',(event)=>{
  test(user);
if(check === true){
ValidateEmail(email);
  isNumber(uName);
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
    validate(data);
  var xhr = new XMLHttpRequest();
  xhr.open('POST',url);
 xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify(data));

}
});
