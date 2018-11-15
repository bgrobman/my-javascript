
const size = document.getElementById('size');
const submit = document.getElementById('submit');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const uName = document.querySelector('#name');
const number = document.querySelector('#number');
const code = document.querySelector('#code');
let numberOfUsers = 0;


var xhr = new XMLHttpRequest();
var url = 'ttps://api.airtable.com/v0/appGMs3wYCKeVkQnl/Table%201';
url +='"Authorization: Bearer keyZ3s4zJ9nbnOFdZ" ';
xhr.open('POST',url,true);
xhr.setRequestHeader('Content-Type','Content-Type: application/json');







submit.addEventListener('click',(event)=>{
  numberOfUsers += 1;

xhr.send(
  {
 "fields": {
   "Name": "Binyamin grobman",
   "Email address": "binyamin.grobman@gmail.com",
   "Number": "0548452883",
   "Time  of work requested": "8 hours",
   "Location of user": "Israel"
 }
}
);

});














// for(let i = 0; i < numberOfUsers.length ; i += 1){
//   let user [i] = firstName + lastName + number + email + loc;
// }
// }
// for(let i = 0 ; i < numberOfUsers.length ; i += 1){
//  let userProfiles = [ ];
//  if( size.value ===  '8_hours' || place.value == toLowerCase('israel'){
//     userProfiles.unshift({
//   Name: firstName,
//   lastName: lastName,
//   number:number,
//   email: email
// });
// }else{
//   userProfiles.push({
// Name: firstName,
// lastName: lastName,
// number:number,
// email: email
// });
// }
