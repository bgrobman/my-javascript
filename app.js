const submit = document.getElementById('submit');
const size = document.getElementById('size');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const uName = document.querySelector('#name');
const number = document.querySelector('#number');
const code = document.querySelector('#project');
 let user =  [size ,loc,email,uName,number,code];
let numberOfUsers = 0;
let check = true;




submit.addEventListener('click',(event)=>{
  numberOfUsers += 1;

  for(let i = 0; i < user.length ; i += 1){
    if(user[i].value === ''){
    alert('you did not fill in the required info for the ' +user[i].name + ' input.' );
   check = false;
    }
  }

if(check === true ){
  var xhr = new XMLHttpRequest();
  var url = 'https://api.airtable.com/v0/appGMs3wYCKeVkQnl/Table%201?api_key=keyZ3s4zJ9nbnOFdZ';
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

  xhr.open('POST',url);
 xhr.setRequestHeader('Content-Type','application/json');
xhr.send(JSON.stringify(data));

}
});
