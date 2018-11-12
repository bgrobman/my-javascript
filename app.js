
const size = document.getElementById('size');
const submit = document.getElementById('submit');
const loc = document.querySelector('#place');
const email = document.querySelector('#email');


submit.addEventListener('click',(event)=>{
if( size.value ===  '8_hours'){
size.style.color = 'red';
}
if(place.value == 'israel'){
  place.style.color = 'blue';
}

});
