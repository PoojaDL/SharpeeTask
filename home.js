// Question 1 answer

var btn=document.querySelector('.bttn');

btn.addEventListener('click',(e)=>{
  e.preventDefault();
  document.querySelector('body').style.background="blue";

})

btn.addEventListener('mouseover',(e)=>{
  e.preventDefault();
  document.querySelector('body').style.background="red";

})

btn.addEventListener('mouseout',(e)=>{
  e.preventDefault();
  document.querySelector('body').style.background="#E4E9FD";

})

// Question 2 answer
var btn=document.querySelector('.bttn');
var form=document.querySelector('#forms')
var nameInput=document.querySelector('#name');
var emailInput=document.querySelector('#email');
var msg=document.querySelector(".message");

form.addEventListener('submit',onsubmit);

function onsubmit(e){
  e.preventDefault();
  if(nameInput.value===''|| emailInput.value===''){
    msg.classList.add('error');
    msg.innerHTML="Please enter proper details"
    setTimeout(()=> msg.remove(),2000);
  }else{
    alert("Your form got submitted");
  }
}
