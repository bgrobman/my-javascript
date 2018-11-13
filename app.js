
const size = document.getElementById('size');
const submit = document.getElementById('submit');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const number = document.querySelector('#number');
let firstNameObject;
let lastNameObject;
let numberObject;
let emailObject;

// var request = new xmlHttpRequest();
// request.open('GET','https://airtable.com/tblJRsH9v4qJSMXmy/viwChThv2QALQLTKE',true);
// request.onload = function () {
// var data = JSON.parse(this.response);
// data.forEach(=>)
// }




submit.addEventListener('click',(event)=>{
for(let i = 0; i < 5 ; i  - 1){
  if( size.value ===  '8_hours'){
size.style.color = 'red';
}
if(place.value == 'israel'){
  place.style.color = 'blue';
}
firstNameObject += name.value;
lastNameObject += name.value;
 numberObject += number.value;
  emailObject += email.value;
}

});
