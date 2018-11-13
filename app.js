
const size = document.getElementById('size');
const submit = document.getElementById('submit');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const number = document.querySelector('#number');
let numberOfUsers = 0;



// var request = new xmlHttpRequest();
// request.open('GET','https://airtable.com/tblJRsH9v4qJSMXmy/viwChThv2QALQLTKE',true);
// request.onload = function () {
// var data = JSON.parse(this.response);
// data.forEach(=>)
// }




submit.addEventListener('click',(event)=>{
  numberOfUsers += 1;

  if( size.value ===  '8_hours'){
size.style.color = 'red';
}
if(place.value == 'israel'){
  place.style.color = 'blue';
}
for(let i = 0 ; i < numberOfUsers.length ; i += 1){
 var userProfiles = [{
  Name: firstName,
  lastName: lastName,
  number:number,
  email: email
},];
}
});
