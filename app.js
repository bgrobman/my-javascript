const submit = document.getElementById('submit');
const inspect = document.getElementById('check');
const size = document.getElementById('size');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');
const uName = document.querySelector('#name');
const number = document.querySelector('#number');
const code = document.querySelector('#project');
const user = [uName,email,number];

let check = false;
let empty = '';

function test(val){
  for(let i = 0; i < val.length ; i += 1){
    if(val[i].value === ''){
    empty += '" ' + val[i].name + '",';
    }else{
   check = true;
 }
}
}


//sends data to server



submit.addEventListener('click',(event)=>{
  test(user);
if(check === false){
  alert('you did not fill in the required info for the '  + empty + ' input(s).');
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
