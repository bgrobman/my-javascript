
const size = document.getElementById('size');
const submit = document.getElementById('submit');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const uName = document.querySelector('#name');
const number = document.querySelector('#number');
const code = document.querySelector('#project');
let user = uName + email + number + size + code + loc ;
let numberOfUsers = 0;


var xhr = new XMLHttpRequest();
var url = 'https://api.airtable.com/v0/appGMs3wYCKeVkQnl/Table%201?';
url +='api_key=YOUR_API_KEY';
xhr.open('POST',url,);


xhr.setRequestHeader('Content-Type','Content-Type: application/json');
submit.addEventListener('click',(event)=>{
  numberOfUsers += 1;

xhr.send(
  {
 "fields": {
   "Name":uName,
   "Email address":email,
   "Number": number,
   "Time  of work requested":size,
   "Location of user":loc
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
