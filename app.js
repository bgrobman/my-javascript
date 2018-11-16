
const size = document.getElementById('size');
const submit = document.getElementById('submit');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const uName = document.querySelector('#name');
const number = document.querySelector('#number');
const code = document.querySelector('#project');
// let user = uName + email + number + size + code + loc ;
let numberOfUsers = 0;



submit.addEventListener('click',(event)=>{
  numberOfUsers += 1;

  var xhr = new XMLHttpRequest();
  var url = 'https://api.airtable.com/v0/appGMs3wYCKeVkQnl/Table%201?api_key=keyZ3s4zJ9nbnOFdZ';

  xhr.open('POST',url);


 xhr.setRequestHeader('Content-Type','Content-Type: application/json');

var data = {
"fields": {
 "Name":uName.value,
 "Email address":email.value,
 "Number": number.value,
 "Time  of work requested":size.value,
 "Location of user":loc.value
}
};


xhr.send(JSON.stringify(data));



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
