document.addEventListener("DOMContentLoaded", function() {

const subbtn=document.getElementById("submitbtn");
const ratebtn=document.getElementById("ratingbtn");
const starate=document.querySelector(".rate");
const tnq=document.querySelector(".thankyou");
const nums=document.querySelectorAll("#num");
const selected=document.getElementById("selected");
let previousSelected =null;
//using foreach then use queryselector 
nums.forEach(num=>{
    num.addEventListener("click",()=>{
        console.log(num.textContent);
        selected.innerHTML=num.innerHTML;
        
        if (previousSelected) {
            previousSelected.style.backgroundColor = "";
          }

          // Set background color of the currently selected number
          num.style.backgroundColor = "white";

          // Update previousSelected to the currently selected number
          previousSelected = num;
}) 


subbtn.addEventListener("click",function(){
    starate.classList.add('hidden'); //add hidden class to startae
    tnq.classList.remove('hidden') 
})


ratebtn.addEventListener("click",function(){
    tnq.classList.add('hidden');
    starate.classList.remove('hidden')
})


})
})
