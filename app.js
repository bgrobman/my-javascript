
const size = document.getElementById('size');
const submit = document.getElementById('submit');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const uName = document.querySelector('#name');
const number = document.querySelector('#number');
const code = document.querySelector('#project');
 let user =  [ ];
let numberOfUsers = 0;
let check = false;

function err(obb){
alert('you did not fill in the required info for the ' + obb + ' input.');
}

submit.addEventListener('click',(event)=>{
  numberOfUsers += 1;

  if(uName.value === '' || number.value === '' || email.value === '' || loc.value === ''){
  check = false;
  err();
}else{
check = true;
}

if(check === true){
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
